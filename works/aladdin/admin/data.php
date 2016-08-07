<?php
    header("Content-Type:text/html;charset=utf-8");
    $filePath=$_FILES["tupian"]['tmp_name'];
    $str=$_FILES["tupian"]['name'];
    $str1= strstr($str,".");
    $names=date("ymdhisms",time());
    copy($filePath,"upload/$names".$str1);

	if (!empty($_POST['content1'])) {
		if (get_magic_quotes_gpc()) {
			$newtitle = stripslashes($_POST['name1']);
            $abstracts = stripslashes($_POST['name3']);
			$content = stripslashes($_POST['content1']);

		} else {
            $newtitle = $_POST['name1'];
            $abstracts = $_POST['name3'];
			$content = $_POST['content1'];

		}
	}
    $db = mysql_connect("localhost", "root", "");
    mysql_select_db("ala");
    mysql_query("SET NAMES UTF8");
    $insert_sql="INSERT INTO news(title,abstract,content,imgs) VALUES('$newtitle','$abstracts','$content','admin/upload/$names$str1')";
    if (mysql_query($insert_sql)){
        echo '{"err":插入成功}';

    }else {
        echo '{"err":插入成功}';
    }
    mysql_close($db);

?>

<script type="text/javascript">
    setTimeout(function () {
        window.location.href="xinweninsert.html"
    }, 2000);

</script>
