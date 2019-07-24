(function () {
    $('#listHead').load("header1.html", function () {
        $('#listFooter').load("footer.html", function () {
            var pageIndex = 1;
            var pageNum = 8;
            var sortPrice = '';
            var isok = false;
            function init() {
                //防止回调地狱
                var page1 = arguments[0];
                let lists = new Promise(function (resolved) {
                    $.ajax({
                        type: 'get',
                        url: '../api/list.php',
                        data: {
                            pageNum: pageNum,
                            pageIndex: pageIndex,
                            sortPrice: sortPrice
                        },
                        success: function (str) {
                            resolved(str);
                        }
                    });
                });
                lists.then(function (a) {
                    let html = '';
                    let str = '';
                    let listArr = JSON.parse(a);
                    console.log(listArr.pages);
                    html = listArr.data.map(function (item) {
                        var a = item.imgs.split('&');
                        str = a.map(function (item) {
                            return ` <a><img src="../img/list/${item}" alt=""></a>`;
                        }).join('');
                        return `<li data-id="${item.gid}">
                                    <a href="###" class="bigpic"><img src="../img/list/${a[0]}" alt=""></a>
                                    <p><span>￥${item.price}.00</span><em>成交<b>${item.col2}</b>笔</em></p>
                                    <p class="title">${item.title}</p>
                                    <div class="shopName"><a>${item.SN}</a><i></i></div>
                                    <div class="smartpic">
                                    ${str}
                                    </div>
                                </li>`;
                    }).join('');
                    $('#mainlist').html(html);
                    P.initMathod({
                        params: { elemId: '#page', total: listArr.pages },
                        requestFunction: function () {
                            //列表渲染自行处理
                            // console.log(JSON.stringify(P.config));
                            //分页模式
                            // var str = JSON.stringify(P.config);
                            var json = P.config;
                            pageIndex = json.pageIndex;
                            $.ajax({
                                type: 'get',
                                url: '../api/list.php',
                                data: {
                                    pageIndex: pageIndex,
                                    pageNum: pageNum,
                                    sortPrice: sortPrice
                                },
                                success: function (str) {
                                    let arr = JSON.parse(str);
                                    html = arr.data.map(function (item) {
                                        a = item.imgs.split('&');
                                        str = a.map(function (item) {
                                            return `<a><img src="../img/list/${item}" alt=""></a>`;
                                        }).join('');
                                        return `<li data-id="${item.gid}">
                                        <a href="###" class="bigpic"><img src="../img/list/${a[0]}" alt=""></a>
                                        <p><span>￥${item.price}.00</span><em>成交<b>${item.col2}</b>笔</em></p>
                                        <p class="title">${item.title}</p>
                                        <div class="shopName"><a>${item.SN}</a><i></i></div>
                                        <div class="smartpic">
                                        ${str}
                                        </div>
                                    </li>`;
                                    }).join('');
                                    $('#mainlist').html(html);
                                }
                            });
                        }
                    });
                });
            }
            //根据小图改变大图的src
            function changebig() {
                $('#mainlist').on('click', '.smartpic img', function () {
                    $(this).parent().parent().parent().find('.bigpic img').attr('src', $(this).attr('src'));
                });
            }
            let html1 = '';
            //足迹 传个id进去
            function footprint(id) {
                // console.log(str);
                //判断localstorage中是否有id
                var oldId = '';
                if (window.localStorage.id) {
                    oldId = window.localStorage.id;
                    //在oldid查找是否有当前的id，没有才加。
                    if (oldId.indexOf(id) < 0) {
                        window.localStorage.id = oldId + '&' + id;
                    }
                    else {
                        //切割数组将当前按下的id
                        var a = oldId.slice(0, oldId.indexOf(id));
                        if (id > 10) {
                            var b = oldId.slice(oldId.indexOf(id) + 2);
                            if (oldId.indexOf(id) == oldId.length - 1) {
                                window.localStorage.id = a + b + id;
                            } else {
                                //末尾添加
                                window.localStorage.id = a + b + '&' + id;
                            }
                        }
                        else {
                            var b = oldId.slice(oldId.indexOf(id) + 3);
                            if (oldId.indexOf(id) == oldId.length - 1) {
                                window.localStorage.id = a + b + id;
                            } else {
                                //末尾添加
                                window.localStorage.id = a + b + '&' + id;
                            }
                        }


                    }
                }
                else {
                    window.localStorage.id = id;
                }
                //开始渲染足迹
                footprint2();
            }

            //足迹渲染
            function footprint2() {
                let data = window.localStorage.id;//1&2&3
                if (data) {
                    let idarr = data.split('&');
                    let i = idarr.length - 1;
                    footprint1();
                    function footprint1() {
                        if (i >= 0) {
                            $.ajax({
                                type: 'get',
                                url: '../api/details.php',
                                data: 'gid=' + idarr[i],
                                success: str => {
                                    var arr = JSON.parse(str)[0];
                                    var pic = arr.imgs.split('&')[0];
                                    html1 += ` <li class="clearfix">
                                            <img src="../img/list/${pic}" alt="">
                                            <p>${arr.title}</p>
                                            <span>￥${arr.price}.00</span>
                                    </li>` ;
                                    i--;
                                    footprint1();
                                    $('#footprint').html(html1);

                                }
                            });
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
            //li跳转到详情页
            function jump() {
                $('#mainlist').on('click', '.bigpic', function () {
                    footprint($(this).parent().attr('data-id'));
                    html1 = '';
                    window.open('details.html?gid=' + $(this).parent().attr('data-id'));
                });
            }
            $('#pricepx').click(function () {
                $('#mainlist').html('');
                isok = !isok;
                if (isok) {
                    sortPrice = 'DESC'
                }
                else {
                    sortPrice = 'asc';
                }
                init();
            });
            init();
            changebig();
            jump();
            footprint2();
        });
    });
    //渲染数据
    $('.app').attr('src', '../img/sy/mob.jpg');
})();
