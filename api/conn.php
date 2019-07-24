<?php
        $server = 'localhost';
        $username = 'root';
        $psw = '';
        $dbname = 'xiangmu';
        $conn = new mysqli( $server, $username, $psw,$dbname);
        if($conn->connect_error){
            die('连接错误：'.$conn->connect_error);
        }
?>