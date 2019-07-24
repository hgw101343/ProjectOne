(function () {
    //轮播图
    let rotary = new Rotary();
    //选项卡
    tag('.floor1', '#floorbdtop1');
    tag('.floor2', '#floorbdtop2');
    tag('.floor3', '#floorbdtop3');
    tag('.floor4', '#floorbdtop4');
    //小轮播图
    smartRotary('#smartlb1');
    smartRotary('#smartlb2');
    smartRotary('#smartlb3');
    smartRotary('#smartlb4');
    smartRotary('#smartlb5');
    //购物车数量
    let goodnum = window.localStorage.gid;
    if (goodnum) {
        let num = goodnum.split('&');
        $('.care em').text(num.length);
        $('.care2').text(num.length);
    }
    /*=======================楼层跳跃 =============== */
    var flag = true //设置标识。防止出现跑马灯  
    $("#floornav li").click(function () {
        flag = false;
        $(this).addClass("active").siblings().removeClass("active")
        var index = $(this).index()//获取当前点击元素的索引  
        var top = $(".floor").eq(index).offset().top;//获取每个banner到顶部的距离  
        console.log($(".floor").eq(index).offset().top);
        $("html,body").animate({ "scrollTop": top }, function () { flag = true })
    })
    //滚轮滑动切换楼层  
    $(window).scroll(function () {
        if (flag) {
            if ($(window).scrollTop() >= 900) {
                $("#floornav").fadeIn(400);
                var scrollT = $(window).scrollTop();
                var len = $(".floor").size();
                $(".floor").each(function () {
                    //这里的1237是第一楼与顶部的offset距离
                    var i = (scrollT - 1237) / $(this).height();
                    var a = Math.round(i) < 0 ? 0 : Math.round(i);
                    if (a > 3) {
                        $("#floornav").stop().fadeOut(400);
                    }
                    $("#floornav li").eq(a).addClass('active').siblings().removeClass('active');
                });
            }
            else {
                $("#floornav").stop().fadeOut(400);
            }
        }
    })
    /* =================回到顶部================== */
    $('#totop').click(function () {
        $("html,body").animate({ "scrollTop": 0 });
    });

    /*============侧栏详情==============================*/
    // console.log($('#box>.aside'));
    $('#box>.aside li').mouseover(function () {
        $(this).find('span').stop().animate({
            opacity: 1,
            right: 40
        });
    });
    $('#box>.aside li').mouseout(function () {
        $(this).find('span').stop().animate({
            opacity: 0,
            right: 50
        });
    });
    //登陆按钮
    $('#Land').click(function () {
        $.cookie('url', decodeURI(window.location.href), { path: '/' });
        // location.href = 'localhost/xiangmu/code/src/html/Land.html';
        var url1 = decodeURI(window.location.href).indexOf('host');
        //如果当前路径中包含host的则是首页
        if (url1 > 0) {
            location.href = 'html/Land.html';
        } else {
            location.href = '../html/Land.html';
        }
    });
    $('#register').click(function () {
        $.cookie('url', decodeURI(window.location.href), { path: '/' });
        // location.href = 'localhost/xiangmu/code/src/html/Land.html';
        var url1 = decodeURI(window.location.href).indexOf('host');
        //如果当前路径中包含host的则是首页
        if (url1 > 0) {
            location.href = 'html/register.html';
        } else {
            location.href = '../html/register.html';
        }
    });
    $('#header3').on('click', '.goodsclassification li', function () {
        var url1 = decodeURI(window.location.href).indexOf('host');
        //如果当前路径中包含host的则是首页
        if (url1 > 0) {
            location.href = 'html/list.html';
        } else {
            location.href = '../html/list.html';
        }
    });
    $('#tohost').click(function () {
        var url1 = decodeURI(window.location.href).indexOf('host');
        //如果当前路径中包含host的则是首页
        if (url1 < 0) {
            location.href = '../host.html';
        }
    });
    $('#tocare').click(function () {
        var url1 = decodeURI(window.location.href).indexOf('host');
        //如果当前路径中包含host的则是首页
        if (url1 > 0) {
            location.href = 'html/care.html';
        } else {
            location.href = '../html/care.html';
        }
    });
    //判断是否有cookie值
    if ($.cookie('username')) {
        var currentURl = location.href;
        $('#Land').text($.cookie('username')).unbind();
        $('#register').text('退出').unbind().click(function () {
            $.removeCookie('username', { path: '/' });
            $.removeCookie('psw', { path: '/' });
            window.localStorage.removeItem('uid');
            location.href = currentURl;
        });
    }
    // //判断购物车有多少商品
    // if (window.localStorage.gid || window.localStorage.uid) {
    //     var num1 = window.localStorage.gid.split('&');
    //     var num2 = window.localStorage.uid.split('&');
    //     var num = num1.length + num2.length;
    //     $('#tocare .care2').text(num);
    //     $('.care em').text(num);
    // }
    if (window.localStorage.gid || window.localStorage.uid) {
        var num1 = num2 = '';
        if (window.localStorage.gid) {
            var num1 = window.localStorage.gid.split('&');
        }
        if (window.localStorage.uid) {
            var num2 = window.localStorage.uid.split('&');
        }
        var num = num1.length + num2.length;
        $('#tocare .care2').text(num);
        $('.care em').text(num);
        console.log(num);
    }

})();