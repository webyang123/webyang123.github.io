<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx2d5565e06a853d4b", "576c506f211558db9b7c07d8d6cd9dd6");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title></title>
</head>
<body>
    <button class="location-btn" type="button" name="button">点击获取位置</button>
    <button class="upimg" type="button" name="button">点击上传图片</button>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */
  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
        "onMenuShareTimeline",
        "onMenuShareAppMessage",
        "onMenuShareQQ",
        "onMenuShareWeibo",
        "openLocation",
        "chooseImage",
    ]
  });
  wx.ready(function () {
    // 分享给朋友
    wx.onMenuShareAppMessage({
        title: '我玩“识破快车真相”击败全国98.21%的人！你敢挑战吗？', // 分享标题
        desc: '快车新年送好礼，识破真相赢福袋！看看你能得积分？', // 分享描述
        link: 'http://didi123.applinzi.com/%E6%BB%B4%E6%BB%B4%E6%89%93%E8%BD%A6/index.html', // 分享链接
        imgUrl: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%BB%B4%E6%BB%B4%E6%89%93%E8%BD%A6&step_word=&pn=1&spn=0&di=111621874680&pi=&rn=1&tn=baiduimagedetail&is=&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=4133390045%2C2135940369&os=2509431200%2C3736473050&simid=0%2C0&adpicid=0&ln=1979&fr=&fmq=1469868678663_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=10&oriquery=&objurl=http%3A%2F%2Fsrc.leju.com%2Fimp%2Fimp%2Fdeal%2Fd4%2F0e%2F7%2F6d5ec7b2c5afce8d67fe95523c2_p24_mk24.png&fromurl=ippr_z2C%24qAzdH3FAzdH3Fgjof_z%26e3B4whjr5s5_z%26e3Bv54AzdH3Fzx-3-xoAzdH3Fda8mandbAzdH3F9la0nl0_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // 用户确认分享后执行的回调函数
            alert("分享成功");
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
    // 分享到朋友圈
    wx.onMenuShareTimeline({
    title: '滴滴打车', // 分享标题
    link: 'http://didi123.applinzi.com/%E6%BB%B4%E6%BB%B4%E6%89%93%E8%BD%A6/index.html', // 分享链接
    imgUrl: 'imgs/logo.png', // 分享图标
    success: function () {
        // 用户确认分享后执行的回调函数
        alert('分享成功');
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});
});

wx.ready(function () {
       // 分享给朋友
    wx.onMenuShareAppMessage({
        title: '我玩“识破快车真相”击败全国98.21%的人！你敢挑战吗？', // 分享标题
        desc: '快车新年送好礼，识破真相赢福袋！看看你能得积分？', // 分享描述
        link: 'http://didi123.applinzi.com/%E6%BB%B4%E6%BB%B4%E6%89%93%E8%BD%A6/index.html', // 分享链接
        imgUrl: 'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%BB%B4%E6%BB%B4%E6%89%93%E8%BD%A6&step_word=&pn=1&spn=0&di=111621874680&pi=&rn=1&tn=baiduimagedetail&is=&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=4133390045%2C2135940369&os=2509431200%2C3736473050&simid=0%2C0&adpicid=0&ln=1979&fr=&fmq=1469868678663_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=10&oriquery=&objurl=http%3A%2F%2Fsrc.leju.com%2Fimp%2Fimp%2Fdeal%2Fd4%2F0e%2F7%2F6d5ec7b2c5afce8d67fe95523c2_p24_mk24.png&fromurl=ippr_z2C%24qAzdH3FAzdH3Fgjof_z%26e3B4whjr5s5_z%26e3Bv54AzdH3Fzx-3-xoAzdH3Fda8mandbAzdH3F9la0nl0_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // 用户确认分享后执行的回调函数
            alert("分享成功");
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });

    // 分享到朋友圈
    wx.onMenuShareTimeline({
    title: '滴滴打车', // 分享标题
    link: 'http://didi123.applinzi.com/%E6%BB%B4%E6%BB%B4%E6%89%93%E8%BD%A6/index.html', // 分享链接
    imgUrl: 'imgs/logo.png', // 分享图标
    success: function () {
        // 用户确认分享后执行的回调函数
        alert('分享成功');
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
});
});
</script>
</html>
