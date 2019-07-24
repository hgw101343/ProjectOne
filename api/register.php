<?php
    include 'conn.php';
    //校验数据库是否有这个用户名，有的话返回1
    $name = isset($_GET['username'])?$_GET['username']:'';
    $sql = "SELECT * FROM userlist WHERE `username` LIKE '$name'";
    $res = $conn->query($sql);
    /*如果有用户名返回1 */
    if($res->num_rows){
        echo 1;
    }
    else{
        echo 0;
    }
?>