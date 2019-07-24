(function () {
    //购物车数量
    function gwcnum() {
        let goodnum = window.localStorage.gid + '&' + window.localStorage.uid;
        if (window.localStorage.gid || window.localStorage.uid) {
            var num1 = num2 = '';
            if (window.localStorage.gid) {
                var num1 = window.localStorage.gid.split('&');
            }
            if (window.localStorage.uid) {
                var num2 = window.localStorage.uid.split('&');
            }
            var num = num1.length + num2.length;
            $('.gwc em').text(num);
            $('#empty').css('display', 'none');
        }
        else {
            $('.gwc em').text(0);
        }
    }
    if ($.cookie('username')) {
        var i = c = -1;
        var arr1 = "";
        var arr7 = '';
        var sz = {};
        var sz1 = {};
        $('#land1').text($.cookie('username'));
        $('#reg').text('退出');
        $('#reg').click(() => {
            $.removeCookie('username', { path: '/' });
            $.removeCookie('psw', { path: '/' });
            location.href = location.href;
        });
        // $('a:contains("请登录")')[0].innerText = $.cookie('username');
        // $('a:contains("免费注册")')[0].innerText = '退出';
        gwcnum();
        //计算总数量
        //渲染数据
        if (window.localStorage.gid) {
            console.log(window.localStorage.gid);
            var gidnum = window.localStorage.gid;
            var arr2 = gidnum.split('&');
            let arr3 = new Set(arr2);
            arr1 = Array.from(arr3);
            sz = {};
            arr2.forEach(function (item) {
                if (sz[item]) {
                    sz[item]++;
                }
                else {
                    sz[item] = 1;
                }
            });
            i = arr1.length - 1;
        }
        //cookie遍历
        if (window.localStorage.uid) {
            var cookienum = window.localStorage.uid;
            var arr5 = cookienum.split('&');
            let arr6 = new Set(arr5);
            arr7 = Array.from(arr6);
            sz1 = {};
            arr5.forEach(function (item) {
                if (sz1[item]) {
                    sz1[item]++;
                }
                else {
                    sz1[item] = 1;
                }
            });
            var c = arr7.length - 1;
        }
        function init() {
            var html1 = '';
            goodlistcare();
            // if ($.cookie('username')) {
            //     goodlistcare1();
            // }
            // goodlistcare1();//cookie的遍历
            function goodlistcare() {
                $.ajax({
                    type: 'get',
                    url: '../api/secookie.php',
                    data: {
                        username: $.cookie('username')
                    },
                    success: str => {
                        var arr1 = JSON.parse(str);
                        html1 = arr1.map(function (item) {
                            return `<li data-kucun="${item.kucun}" data-id="${item.gid}">
                                                <p><input type="checkbox" name="shopname"><span>${item.shop}</span></p>
                                                <div class="carelist">
                                                    <div class="caredetails">
                                                        <input type="checkbox" name="good">
                                                        <img src="../img/list/${item.imgs}" alt="">
                                                        <a>${item.title}</a>
                                                    </div>
                                                    <div class="caredetailsright">
                                                        <a class="price">￥${item.price}.00</a>
                                                        <div class="zj">
                                                            <input type="button" value="-" class="jian">
                                                            <input type="text" value="${item.num}" class="nownum" data-kucun='${item.kucun}'>
                                                            <input type="button" value="+" class="jia">
                                                        </div>
                                                        <a class="delbtn">删除</a>
                                                    </div>
                                                </div>
                                            </li>`;
                        }).join('');
                        console.log(html1);
                        $('#showcarebody').html(html1);
                    }
                });
            }
            // function goodlistcare() {
            //     if (i >= 0) {
            //         $.ajax({
            //             type: 'get',
            //             url: '../api/details.php',
            //             data: 'gid=' + arr1[i],
            //             success: str => {
            //                 var arr = JSON.parse(str)[0];
            //                 var pic = arr.imgs.split('&')[0];
            //                 console.log(arr);
            //                 html1 += `<li data-kucun="${arr.kucun}" data-id="${arr1[i]}">
            //                     <p><input type="checkbox" name="shopname"><span>${arr.SN}</span></p>
            //                     <div class="carelist">
            //                         <div class="caredetails">
            //                             <input type="checkbox" name="good">
            //                             <img src="../img/list/${pic}" alt="">
            //                             <a>${arr.title}</a>
            //                         </div>
            //                         <div class="caredetailsright">
            //                             <a class="price">￥${arr.price}.00</a>
            //                             <div class="zj">
            //                                 <input type="button" value="-" class="jian">
            //                                 <input type="text" value="${sz[arr1[i]]}" class="nownum">
            //                                 <input type="button" value="+" class="jia">
            //                             </div>
            //                             <a class="delbtn">删除</a>
            //                         </div>
            //                     </div>
            //                 </li>` ;
            //                 i--;
            //                 goodlistcare();
            //                 $('#showcarebody').html(html1);

            //             }
            //         });
            //     }
            //     else {
            //         return false;
            //     }
            // }
            // function goodlistcare1() {
            //     if (c >= 0) {
            //         $.ajax({
            //             type: 'get',
            //             url: '../api/details.php',
            //             data: 'gid=' + arr7[c],
            //             success: str => {
            //                 console.log(str);
            //                 var arr = JSON.parse(str)[0];
            //                 var pic = arr.imgs.split('&')[0];
            //                 console.log(arr);
            //                 html1 += `<li data-kucun="${arr.kucun}" data-id="${arr.gid}">
            //                                 <p><input type="checkbox" name="shopname"><span>${arr.SN}</span></p>
            //                                 <div class="carelist">
            //                                     <div class="caredetails">
            //                                         <input type="checkbox" name="good">
            //                                         <img src="../img/list/${pic}" alt="">
            //                                         <a>${arr.title}</a>
            //                                     </div>
            //                                     <div class="caredetailsright">
            //                                         <a class="price">￥${arr.price}.00</a>
            //                                         <div class="zj">
            //                                             <input type="button" value="-" class="jian">
            //                                             <input type="text" value="${sz1[arr7[c]]}" class="nownum">
            //                                             <input type="button" value="+" class="jia">
            //                                         </div>
            //                                         <a class="delbtn">删除</a>
            //                                     </div>
            //                                 </div>
            //                             </li>` ;
            //                 c--;
            //                 goodlistcare1();
            //                 $('#showcarebody').html(html1);
            //             }
            //         })
            //     }
            //     else {
            //         return false;
            //     }
            // }

        }
        init();
        function totalnum() {
            var total = 0;
            $('#showcarebody input[name="good"]:checked').each(function (item) {
                total += $(this).parent().parent().find('.nownum').val() * 1;
            });
            $('#allnum').text('已选' + total + ' 件商品');
        }
        //计算总价
        function totalprict() {
            var totalprice = 0;
            $('#showcarebody input[name="good"]:checked').each(function () {
                totalprice += $(this).parent().parent().find('.price').text().slice(1) * $(this).parent().parent().find('.nownum').val();
            });
            $('#prices').text(totalprice);
        }
        totalnum();
        totalprict();
        $('#qx1 input').click(function () {
            var now = $(this).prop('checked');
            $('#showcarebody input').prop('checked', now);
            totalnum();
            totalprict();
        });
        //点击店铺名
        $('#showcarebody').on('click', 'input[name="shopname"]', function () {
            var now = $(this).prop('checked');
            $(this).parent().parent().find('input[name="good"]').prop('checked', now);
            totalnum();
            totalprict();
        });
        //点击商品
        $('#showcarebody').on('click', 'input[name="good"]', function () {
            var now = $(this).prop('checked');
            $(this).parent().parent().parent().find('input[name="shopname"]').prop('checked', now);
            totalnum();
            totalprict();
        });
        //数量控制
        $('#showcarebody').on('click', '.jian', function () {
            let num = $(this).parent().find('.nownum').val();
            num--;
            if (num <= 1) {
                num = 1;
            }
            $(this).parent().find('.nownum').val(num);
            sjk($(this));
        });
        //数量加
        $('#showcarebody').on('click', '.jia', function () {
            let num = $(this).parent().find('.nownum').val();
            num++;
            if (num > $(this).parent().parent().parent().parent().attr('data-kucun')) {
                num = $(this).parent().parent().parent().parent().attr('data-kucun');
            }
            $(this).parent().find('.nownum').val(num);
            sjk($(this));
        });
        //封装删除元素
        function removecare(this1) {
            var rmgid = this1.parent().parent().parent().attr('data-id');
            $.ajax({
                type: 'get',
                url: '../api/rmcare.php',
                data: {
                    gid: rmgid
                },
                success: str => {
                    console.log(arr1.indexOf(rmgid));
                    arr1.splice(arr1.indexOf(rmgid), 1);
                    window.localStorage.gid = arr1.join('&');
                    gwcnum();
                }
            });
        }
        //更改数据库的值
        function sjk(this2) {
            console.log(this2.parent().parent().parent().parent().attr('data-id'));
            console.log(this2.parent().find('.nownum').val() * 1);
            $.ajax({
                type: 'get',
                url: '../api/ggsj.php',
                data: {
                    gid: this2.parent().parent().parent().parent().attr('data-id'),
                    num: this2.parent().find('.nownum').val() * 1
                },
                success: str => {
                    console.log(str);
                }
            });
        }

        //单个删除按钮
        $('#showcarebody').on('click', '.delbtn', function () {
            $(this).parent().parent().parent().remove();
            removecare($(this));
            totalnum();
            totalprict();
        });
        //选中元素删除按钮
        $('#dels').click(function () {
            $('#showcarebody').find('input[name="good"]:checked').each(function () {
                $(this).parent().parent().parent().remove();
                removecare($(this));
                totalnum();
                totalprict();
            })
        });
        $('#showcarebody').on('click', 'input', function () {
            totalnum();
            totalprict();
            if ($('input[name="good"]:checked').size() == $('input[name="good"]').size()) {
                $('#qx1 input').prop('checked', true);
            }
            else {
                $('#qx1 input').prop('checked', false);
            }
        });
    }

    else {
        $('#empty').css('display', 'block');
        $('#land1').text('请登录');
        $('#reg').text('免费注册');
        $('#land1').click(() => {
            $.cookie('url', window.location.href);
            window.location.href = 'Land.html';
        });
        $('#reg').click(() => {
            $.cookie('url', window.location.href);
            window.location.href = 'register.html';
        })
    }
    $('#careLand').click(function () {
        console.log('a');
        $.removeCookie('url');
        $.cookie('url', window.location.href);
        window.location.href = 'Land.html';
    });
})();