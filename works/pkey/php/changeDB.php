<?php
    $db = mysql_connect("localhost", "root", "");
    mysql_select_db("wuhezhizhong");
    mysql_query("SET NAMES UTF8");
    $action = $_GET["action"];
    switch ($action) {
        case 'add': {
            foreach ($_GET as $key => $value) {
               $$key=$value;
           }
           $insert_sql="INSERT INTO liuyan(leixing,names,titless,tel,contents,imgname) VALUES('$fyleixing','$fynames','$fytitle','$fytel','$liuyan','$imgname')";
           if (mysql_query($insert_sql)){
               echo '{"err":0}';
           }else {
               echo '{"err":1}';
           }
           break;
        }
        case 'liuyanqueryAll': {
            foreach ($_GET as $key => $value) {
               $$key=$value;
           }
           $scount = "SELECT COUNT(*) FROM liuyan";
           $res = mysql_query($scount);
           $count = mysql_fetch_row($res);
           if ($limits==0) {
               $limits=$count[0];

           }
            $select_sql = "SELECT * FROM liuyan ORDER BY id DESC  Limit 0,{$limits} ";
            $res = mysql_query($select_sql);
            $array = array();
            while ($row = mysql_fetch_object($res)) {
                array_push($array, $row);
            }
            echo json_encode($array);
            break;
        }
        case 'liuyanqueryAll1': {
            foreach ($_GET as $key => $value) {
               $$key=$value;
           }
            $select_sql = "SELECT * FROM liuyan ORDER BY id DESC ";
            $res = mysql_query($select_sql);
            $array = array();
            while ($row = mysql_fetch_object($res)) {
                array_push($array, $row);
            }
            echo json_encode($array);
            break;
        }
        case 'queryAll': {
            foreach ($_GET as $key => $value) {
               $$key=$value;
           }
           $scount = "SELECT COUNT(*) FROM news";
           $res = mysql_query($scount);
           $count = mysql_fetch_row($res);
           if ($limits==0) {
               $limits=$count[0];

           }
            $select_sql = "SELECT * FROM news ORDER BY id DESC Limit 0,{$limits}";
            $res = mysql_query($select_sql);
            $array = array();
            while ($row = mysql_fetch_object($res)) {
                array_push($array, $row);
            }
            echo json_encode($array);
            break;
        }
        case 'gonggaoqueryAll': {
            foreach ($_GET as $key => $value) {
               $$key=$value;
           }
           $scount = "SELECT COUNT(*) FROM gonggao";
           $res = mysql_query($scount);
           $count = mysql_fetch_row($res);
           if ($limits==0) {
               $limits=$count[0];

           }
            $select_sql = "SELECT * FROM gonggao ORDER BY id DESC  Limit 0,{$limits}";
            $res = mysql_query($select_sql);
            $array = array();
            while ($row = mysql_fetch_object($res)) {
                array_push($array, $row);
            }
            echo json_encode($array);
            break;
        }
        case 'update':{
            foreach ($_GET as $key => $value) {
                $$key=$value;
            }
           $insert_sql="UPDATE liuyan SET huifu='$huifu' WHERE id='$idindex'";
           $res=mysql_query($insert_sql);
            break;
        }
        default:
            break;
    }
    mysql_close($db);

 ?>
