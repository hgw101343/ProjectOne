(function () {
    var a = $.cookie('url');
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    //当聚焦提示框出现
    $('#phonenum').focus(function () {
        $(this).parent().parent().find('.Tips').show();
    });
    $('#phonenum').blur(function () {
        //非空判断
        flag1 = false;
        var num = ($('#phonenum').val().trim()) * 1;
        if (num) {
            //正则判断
            var check = checkReg.tel(num);
            if (check) {
                $.ajax({
                    type: 'get',
                    url: '../api/register.php',
                    data: {
                        username: num
                    },
                    success: function (str) {
                        str = str * 1;
                        if (str) {
                            $('#Tipsphone').css('color', 'red');
                            $('#Tipsphone').text("该用户名已被注册");
                            flag1 = false;
                        }
                        else {
                            // $('#Tipsphone').text("可以注册");
                            $('#Tipsphone').css({
                                background: '#f7f7f7',
                                color: '#000',
                                opacity: 0
                            });
                            flag1 = true;
                        }
                    }
                });
            }
            else {
                flag1 = false;
                $('#Tipsphone').css('color', 'red');
                $('#Tipsphone').text("请输入正确的手机号码");
            }
        }
        else {
            $('#Tipsphone').css('color', 'red');
            $('#Tipsphone').text("请输入手机号码");
        }
    });
    /* ===============密码强度======================*/
    $('#Tipspsw1').focus(function () {
        $(this).parent().parent().find('.Tips').show();
    });
    function strength(psw, leave, this5) {
        if (psw) {
            if (psw.match(/[a-z]/g)) {
                leave++;
            }
            if (psw.match(/[0-9]/g)) {
                leave++;
            }
            if (psw.match(/\W/g)) {
                leave++;
            }
            if (psw.match(/[A-Z]/g)) {
                leave++;
            }
            for (var i = 0; i < leave; i++) {
                this5.parent().parent().find('.checkeasy span').eq(i).css({
                    background: 'red'
                });
            }
            switch (leave) {
                case 1:
                    this5.parent().next().next().find('em').html('弱');
                    break;
                case 2:
                    this5.parent().next().next().find('em').html('一般');
                    break;
                case 3:
                    this5.parent().next().next().find('em').html('强');
                    break;
                case 4:
                    this5.parent().next().next().find('em').html('很强');
                    break;
            }
        }
    }
    $('#Tipspsw1').keyup(function (ev) {
        $(this).parent().parent().find('.checkeasy').show();
        let leave = 0;
        let psw = $('#Tipspsw1').val().trim();
        strength(psw, leave, $(this));
        if (ev.keyCode == '8') {
            console.log($(this).parent().parent().find('.checkeasy span'));
            leave = 0;
            $(this).parent().next().next().find('span').each(function () {
                $(this).css({
                    background: '#bdc4ce'
                });
            });
            strength(psw, leave, $(this));
        }
    });

    $('#Tipspsw1').blur(function () {
        flag2 = false;
        let psw = $('#Tipspsw1').val().trim();
        console.log(psw);
        var reg = /\S{6,20}/;
        if (reg.test(psw)) {
            $(this).parent().parent().find('.Tips').css('opacity', '0');
            flag2 = true;
        }
        else {
            flag2 = false;
            $(this).parent().parent().find('.Tips').css('color', 'red');
        }
    });
    //验证密码
    $('#Tipspsw2').focus(function () {
        $(this).parent().parent().find('.Tips').show();
        // $(this).parent().parent().prev().find('.Tips').hide();
    });
    $('#Tipspsw2').blur(function () {
        flag3 = false;
        if ($('#Tipspsw2').val() && $('#Tipspsw1').val()) {
            if ($('#Tipspsw2').val() == $('#Tipspsw1').val()) {
                flag3 = true;
                $(this).parent().parent().find('.Tips').hide();
            }
            else {
                $(this).parent().parent().find('.Tips').html('两次输入密码不一致');
            }
        }

    });
    //注册账号,弹窗
    $('#registerbtn').click(function () {
        console.log(flag1, flag2, flag3);
        if (flag1 == true && flag2 == true && flag3 == true) {
            if ($('#agree').prop('checked')) {
                let username = $('#phonenum').val().trim();
                let psw = $('#Tipspsw1').val().trim();
                $.ajax({
                    type: 'post',
                    url: '../api/newusername.php',
                    data: {
                        username: username,
                        psw: psw
                    },
                    success: function (str) {
                        if (str) {
                            $.sendSuccess('注册成功', 3000, function () {
                                window.location.href = a;
                            });
                            $('input').val('');
                            $('.checkeasy').css('display', 'none');
                            $('#agree').prop('checked', false);

                        }
                    }
                });

            }
            else {
                $(this).parent().prev().find('.Tips').show().css('color', 'red');
            }
        }
        else {
            $.sendWarning('请填写完成', 3000, function () {
            });
            if (!flag1) {
                $('.Tips').eq(0).show();
            }
            if (!flag2) {
                $('.Tips').eq(1).show();
            }
            if (!flag3) {
                $('.Tips').eq(2).show();
            }
        }

    });
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
    $('#Land2').click(function () {
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
})();