<?php
class JSSDK {
  private $appId;
  private $appSecret;

  public function __construct($appId, $appSecret) {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
  }

  public function getSignPackage() {
    mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
    mysql_select_db(SAE_MYSQL_DB);

    $jsapiTicket = $this->getJsApiTicket();

    // 注意 URL 一定要动态获取，不能 hardcode.
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

    $timestamp = time();
    $nonceStr = $this->createNonceStr();

    // 这里参数的顺序要按照 key 值 ASCII 码升序排序
    $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

    $signature = sha1($string);

    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string
    );
    return $signPackage;
  }

  private function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }

  private function getJsApiTicket() {
    // jsapi_ticket
    $sql = "SELECT * FROM ticket";
    $res = mysql_query($sql);
	$row = mysql_fetch_assoc($res);
    $accessToken = $this->getAccessToken();
    $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token=$accessToken";

    if( mysql_num_rows($res) <=0 ) {
      //不存在   直接获取
      $ticket = json_decode($this->httpGet($url))->ticket;
      $time = time();
      $sql = "INSERT INTO ticket (ticket,`times`) VALUES('{$ticket}','{$time}')";
      mysql_query($sql);
      $jsapi_ticket = $ticket;
    }else{
      //存在  并且判断
      $time = $row['time'];
      $now = time();
      if($now-$time >7000){
        //过期  重新获取  并且存储
        $ticket = json_decode($this->httpGet($url))->ticket;
        $time = time();
        $sql = "UPDATE ticket SET ticket='{$ticket}',`time`='{$time}'";
        mysql_query($sql);
        $jsapi_ticket = $ticket;
      }else{
        $jsapi_ticket = $row['ticket'];
      }
    }
    return $jsapi_ticket;
  }

  private function getAccessToken() {
    // access_token
    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$this->appId."&secret=".$this->appSecret;

    $sql = "SELECT * FROM tokens";
    $res = mysql_query($sql);

    // $row = mysql_fetch_row($res);
    if( mysql_num_rows($res) <=0 ) {
      //不存在   直接获取
      $token = json_decode($this->httpGet($url))->access_token;
      $time = time();
      $sql = "INSERT INTO tokens (token,`timestamp`) VALUES('{$token}','{$time}')";
      mysql_query($sql);
      $access_token = $token;
    }else{
      //存在  并且判断
      $row = mysql_fetch_assoc($res);
      $time = $row['timestamp'];
      $now = time();
      if($now-$time >7000){
        //过期  重新获取  并且存储
        $token = json_decode($this->httpGet($url))->access_token;
        $time = time();
        $sql = "UPDATE tokens SET token='{$token}',`timestamp`='{$time}'";
        mysql_query($sql);
        $access_token = $token;
      }else{
        $access_token = $row['token'];
      }
    }
    return $access_token;
  }

  private function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    // 为保证第三方服务器与微信服务器之间数据传输的安全性，所有微信接口采用https方式调用，必须使用下面2行代码打开ssl安全校验。
    // 如果在部署过程中代码在此处验证失败，请到 http://curl.haxx.se/ca/cacert.pem 下载新的证书判别文件。
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, true);
    curl_setopt($curl, CURLOPT_URL, $url);

    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
  }
}
?>
