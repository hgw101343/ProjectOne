<?php
    include 'conn.php';
    $gid = isset($_GET['gid'])?$_GET['gid']:'';
    $sql = "DELETE FROM carelist WHERE gid = $gid";
    $res = $conn->query($sql);
    echo $gid;
?>