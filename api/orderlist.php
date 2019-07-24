<?php
    include 'conn.php';
    $gid = isset($_GET['gid'])?$_GET['gid']:'';
    $title = isset($_GET['title'])?$_GET['title']:'';
    $shop = isset($_GET['shop'])?$_GET['shop']:'';
    $kucun = isset($_GET['kucun'])?$_GET['kucun']:'';
    $price = isset($_GET['price'])?$_GET['price']:'';
    $num = isset($_GET['num'])?$_GET['num']:'';
    $username = isset($_GET['username'])?$_GET['username']:'';
    $imgs = isset($_GET['imgs'])?$_GET['imgs']:'';
    // $sql = "INSERT INTO carelist(gid,title,shop,kucun,price,num) VALUES($gid,'$title','$shop',$kucun,$price,$num)";
    // $res = $conn->query($sql);
    $sql2 = "SELECT * FROM carelist WHERE gid=$gid";
    $res2 = $conn->query($sql2);
    $content = $res2->fetch_all(MYSQLI_ASSOC);
    if(!$res2->num_rows){
        $sql = "INSERT INTO carelist(gid,title,shop,kucun,price,num,username,imgs) VALUES($gid,'$title','$shop',$kucun,$price,$num,'$username','$imgs')";
        $res = $conn->query($sql);
    }
    echo $num;
?>