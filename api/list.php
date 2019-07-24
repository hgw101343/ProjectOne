<?php
//连接数据库
    include 'conn.php';
    $page = isset($_GET['pageIndex']) ? $_GET['pageIndex'] : '';//页数，哪一页
    $num = isset($_GET['pageNum']) ? $_GET['pageNum'] : '';//一页数据有7条
    $sortPrice = isset($_GET['sortPrice']) ? $_GET['sortPrice'] : '';
    $index = ($page - 1) * $num;
    if($sortPrice){
        $sql = "SELECT * FROM list ORDER BY price $sortPrice LIMIT $index,$num";
    }
    else{
        $sql = "SELECT * FROM list LIMIT $index,$num";
    }
    // $sql = "SELECT * FROM list";
    $res = $conn->query($sql);
    $content = $res->fetch_all(MYSQLI_ASSOC);
    $sql2 = 'SELECT * FROM list';
    $res2 = $conn->query($sql2);
    $data = array(
        'data' => $content,//想要的10条数据
        'pages' => $res2->num_rows,//总条数
        'page' => $page,
        'num' => $num
    );
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>
