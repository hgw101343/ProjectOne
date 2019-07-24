<?php
     include 'conn.php';
     $username = isset($_GET['username'])?$_GET['username']:'';
     $sql = "SELECT * FROM carelist WHERE username='$username' OR username='local'";
     $res = $conn->query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($content,JSON_UNESCAPED_UNICODE);
    // echo $username;
?>