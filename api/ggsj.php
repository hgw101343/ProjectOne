<?php
    include 'conn.php'; 
    $gid = isset($_GET['gid']) ? $_GET['gid'] : '';
    $num = isset($_GET['num']) ? $_GET['num'] : '';
    $sql = "UPDATE carelist SET num=$num WHERE gid=$gid";
    $res = $conn->query($sql);
    echo $num;
?>