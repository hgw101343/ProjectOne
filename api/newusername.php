<?php
//创建新的用户名和密码
include 'conn.php';
$name = isset($_POST['username'])?$_POST['username']:'';
$psw = isset($_POST['psw'])?$_POST['psw']:'';
$sql = "INSERT INTO userlist(username,password) VALUES('$name','$psw')";
$content = $conn->query($sql);
if($content){
    echo 1;
}
else{
    echo 0;
}
?>