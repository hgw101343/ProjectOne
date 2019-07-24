(function () {
    //渲染头部和尾部
    $('#detailsTop').load('header1.html', function () {
        $('#detailsBottom').load('footer.html');
    });
    //拿到gid到数据库里面查找
    var gid = window.location.search.slice(1).split('=')[1];
    let datalist = new Promise(function (relove) {
        $.ajax({
            type: 'get',
            url: '../api/details.php',
            data: {
                gid: gid
            },
            success: function (str) {
                relove(str);
            }
        });
    });
    datalist.then(function (data) {
        let html = '';
        let str = '';
        let arr = JSON.parse(data);
        html = arr.map(function (item) {
            let spic = item.imgs.split('&');
            str = spic.map(function (item) {
                return ` <img src="../img/list/${item}" alt="">`;
            }).join('');
            return `<div class="maintop">
                <div class="content">
                    <a href="###">全部&nbsp;&nbsp;>&nbsp;&nbsp;</a>
                    <a href="###">白酒&nbsp;&nbsp;>&nbsp;&nbsp;</a>
                    <a href="###">${item.title}</a>
                </div>
            </div>
            <div class="detailmain clearfix">
                <div class="content clearfix" id="">
                    <div class="main1">
                        <div id="boxbig">
                            <div class="box1">
                                <div class="box1top">
                                    <span class="kuai"></span>
                                    <img src="../img/list/${spic[0]}" alt="">
                                </div>
                                <div class="box3">
                                    <div id="smartlist">
                                       ${str}
                                    </div>
                                </div>
                            </div>
                            <div class="box2">
                                <img src="../img/list/${spic[0]}" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="main2">
                        <div class="main2left">
                            <h2>${item.title}</h2>
                            <div class="pricediv">
                                <span>价格</span>
                                <span class="price">￥${item.price}.00</span>
                            </div>
                            <ul class="coldiv">
                                <li>
                                    <p><span>销量:</span><a>${item.col2}</a></p>
                                </li>
                                <li>
                                    <p><span>评价:</span><a>37</a></p>
                                </li>
                                <li>
                                    <p><span>评分:</span><i></i></p>
                                </li>
                            </ul>
                            <ul class="infodiv">
                                <li><span>运费</span><em class="state">￥0</em></li>
                                <li><span>促销</span><em class="state">满200.00免运费</em></li>
                                <li><span>库存</span><em class="state" id="kucun">有货</em></li>
                                <li><span>物流</span><em class="state">配送至</em></li>
                                <li><span>服务</span><em class="state">由<i>${item.SN}</i>从青海西宁发货，并提供售后服务</em></li>
                            </ul>
                            <div class="numgw">
                                <div class="numdiv" data-num="${item.kucun}">
                                    <span>数量</span>
                                    <input type="button" value="-" id="jian">
                                    <input type="text" value="1" id="num">
                                    <input type="button" value="+" id="jia">
                                </div>
                                <div class="gwc">
                                    <a><i></i>立即购买</a>
                                    <a id="addcar"><i></i>加入购物车</a>
                                </div>
                            </div>
                        </div>
                        <div class="main2right">
                            <p class="shopName">${item.SN}</p>
                        </div>
                    </div>
                </div>
        </div>`;
        }).join('');
        $('#detailsMain').html(html);
        Magnifier('.box1top', '#smartlist', '.box2', '.kuai');
        numControl();
        $(function () {
            var offset = $(".care").offset();  //结束的地方的元素
            $("#addcar").click(function (event) {   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
                $("html,body").animate({ "scrollTop": 0 });
                careaddku($(this));
                var addcar = $(this);
                var img = addcar.parent().parent().parent().parent().parent().find('.box1top img').attr('src');
                var flyer = $('<img class="u-flyer" src="' + img + '">');
                flyer.fly({
                    start: {
                        left: $("#addcar").offset().left,
                        top: $("#addcar").offset().top
                    },
                    end: {
                        left: offset.left + 10,
                        top: offset.top + 10,
                        width: 0,
                        height: 0
                    },
                    onEnd: function () {
                        $("#msg").show().animate({ width: '250px' }, 200).fadeOut(1000, function () {
                            var sl = $('#num').val();
                            for (var i = 0; i < sl; i++) {
                                carelist();
                            }
                        });
                    }
                });
            });
            //点击加入购物车把数据传进数据库
            function careaddku(this1) {
                var arr = this1.parent().parent().parent().parent().prev().find('.box1top img').attr('src').split('/');
                if ($.cookie('username')) {
                    $.ajax({
                        type: 'get',
                        url: '../api/orderlist.php',
                        data: {
                            gid: gid,
                            title: this1.parent().parent().parent().find('h2').text(),
                            shop: this1.parent().parent().parent().find('.state i').text(),
                            kucun: this1.parent().prev().attr('data-num') * 1,
                            price: this1.parent().parent().parent().find('.price').text().slice(1) * 1,
                            num: this1.parent().prev().find('#num').val() * 1,
                            username: $.cookie('username'),
                            imgs: arr[arr.length - 1]

                        },
                        success: function (str) {
                            console.log(str);
                        }
                    });
                }
                else {
                    $.ajax({
                        type: 'get',
                        url: '../api/orderlist.php',
                        data: {
                            gid: gid,
                            title: this1.parent().parent().parent().find('h2').text(),
                            shop: this1.parent().parent().parent().find('.state i').text(),
                            kucun: this1.parent().prev().attr('data-num') * 1,
                            price: this1.parent().parent().parent().find('.price').text().slice(1) * 1,
                            num: this1.parent().prev().find('#num').val() * 1,
                            username: 'local',
                            imgs: arr[arr.length - 1]
                        },
                        success: function (str) {
                            console.log(str);
                        }
                    });
                }
            }
            //点击加入购物车存当前gid的值进localstorage
            function carelist() {
                let num = '';
                if ($.cookie('username')) {
                    if (window.localStorage.uid) {
                        var usid = window.localStorage.uid;
                        //在oldid查找是否有当前的id，没有才加。
                        window.localStorage.uid = usid + '&' + gid;
                    }
                    else {
                        window.localStorage.uid = gid;
                    }
                }
                else {
                    if (window.localStorage.gid) {
                        var oldGid = window.localStorage.gid;
                        //在oldid查找是否有当前的id，没有才加。
                        window.localStorage.gid = oldGid + '&' + gid;
                    }
                    else {
                        window.localStorage.gid = gid;
                    }
                    //判断购物车有多少商品
                }
                if (window.localStorage.gid || window.localStorage.uid) {
                    var num1 = num2 = '';
                    if (window.localStorage.gid) {
                        var num1 = window.localStorage.gid.split('&');
                    }
                    if (window.localStorage.uid) {
                        var num2 = window.localStorage.uid.split('&');
                    }
                    var num3 = num1.length + num2.length;
                    $('.care em').text(num3);
                    $('.care2').text(num3);
                    console.log(num3);
                }
            }
        });

    });
})();