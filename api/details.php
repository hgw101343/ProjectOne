<?php
    include 'conn.php';     
    $gid = isset($_GET['gid']) ? $_GET['gid'] : '';
    $sql = "SELECT * FROM list WHERE gid like '$gid'";
    $res = $conn->query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>