<?php
//验证数据库中是否有次用户和密码
    include 'conn.php';
    $un = isset($_POST['username'])?$_POST['username']:'';
    $psw = isset($_POST['password'])?$_POST['password']:'';
    $sql = " SELECT * FROM userlist WHERE username='$un' AND `password`='$psw'";
    $res = $conn->query($sql);
    if($res->num_rows){
        echo 1;
    }
    else{
        echo 0;
    }
?>