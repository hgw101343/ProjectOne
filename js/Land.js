(function () {
    var a = $.cookie('url');
    console.log(a);
    $('#tabti li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabmain').eq($(this).index()).css('display', 'block').siblings()
            .css('display', 'none');
    });

    $('#Landbtn').click(function () {
        let username = $('.un').eq(0).val().trim();
        let psw = $('.un').eq(1).val().trim();
        let landstus = new Promise(function (resolved) {
            $.ajax({
                type: 'POST',
                url: '../api/Land.php',
                data: {
                    username: username,
                    password: psw
                },
                success: function (str) {
                    var str1 = str * 1;
                    resolved(str1);
                }
            });
        });
        landstus.then(function (data) {
            if (data) {
                $.sendSuccess('登陆成功', false, function () {
                    $.cookie('username', username, { expires: 10, path: "/" });
                    $.cookie('psw', psw, { expires: 10, path: "/" });
                    location.href = a;
                });
            }
            else {
                $.sendError('登陆失败', 3000);
            }
        });
    });
})();