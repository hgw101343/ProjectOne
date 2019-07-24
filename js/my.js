let _this = '';
function Rotary() {
    _this = this;
    _this.timer = null;//开启一个定时器
    _this.zindex = 2;//存zindex的值
    _this.now = 0; // 存当前下标
    _this.init();
    _this.timer = setInterval(_this.lunbo, 3000);
}
Rotary.prototype.follow = function () {
    $('#pointbanner span').each(function () {
        $(this).removeClass('active');
    });
    $('#pointbanner span').eq(_this.now).addClass('active');
}
Rotary.prototype.lunbo = function () {
    _this.now++;
    if (_this.now >= $('#banner li').size()) {
        _this.now = 0;
    }
    $('#banner li').eq(_this.now).css('z-index', _this.zindex++).css('opacity', 0.5).animate({ 'opacity': 1 });
    if (_this.zindex > $('#banner li').size() + 1) {
        _this.clearindex();
        _this.zindex = 2;
    }
    _this.follow();

}
Rotary.prototype.clearindex = function () {
    // let _this = this;
    $('#banner li').each(function () {
        $(this).css('z-index', 0).css({ 'opacity': 0 });
    });
    $('#banner li').eq(this.now).css('z-index', 1);
}

Rotary.prototype.init = function () {
    //zindex清零
    this.lunbo();
    this.clearindex();
    //焦点跟随
    this.follow();
    let _this = this;
    $('#pointbanner span').mouseover(function () {
        console.log(this);
        _this.now = $(this).index();
        _this.clearindex();
        $('#banner li').eq(_this.now).css('z-index', 1).css('opacity', 0.5).animate({ 'opacity': 1 });
        _this.follow();
    });
    $('.banner').mouseover(function () {
        clearInterval(_this.timer);
    });
    $('.banner').mouseout(function () {
        _this.timer = setInterval(_this.lunbo, 2000);
    });
}

/*============ 小轮播图 只有一个参数整个div的id ================= */
function smartRotary(smartlb) {
    let num = 0;
    let sum = -$(smartlb).width()
    $(smartlb).find('.next').click(function () {
        num++;
        if (num > 2) {
            num = 0;
        }
        $(this).next().children().animate({
            'margin-left': num * sum
        }, 400);
    });
    $(smartlb).find('.prev').click(function () {
        if (num == 0) {
            num = 2;
        }
        else {
            num--;
        }
        $(this).next().next().children().animate({
            'margin-left': num * sum
        }, 400);
    });
}

//================第一个参数是上方控制的class名，第二个参数是下面显示内容外层的id名
function tag(floortop, floorbd) {
    $(floortop).each(function () {
        $(this).mouseenter(function () {
            for (let i = 1; i < $(floorbd).children().size(); i++) {
                $(floorbd).children().eq(i).hide();
            }
            $(floorbd).children().eq($(this).index() + 1).show();
        });
    });
}

/*
 	表单验证的方法： 调用里面的子功能  (json对象里面有很多子功能)
 	var checkReg = {
 		tel : function() {}
 	}
 	
 	调用方法：
 	checkReg.tel();
 	
*/

var checkReg = {
    trim: function (str) { //去掉前后空格
        var reg = /^\s+|\s+$/g;
        return str.replace(reg, '');
    },
    tel: function (str) { //号码
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    email: function (str) { //邮箱正则:a_a2-+.s @ a_a+2-.s  .s_a2
        var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //网上推荐
        return reg.test(str);
    },
    idcard: function (str) { //身份证
        var reg = /^(\d{17}|\d{14})[\dX]$/;
        return reg.test(str);
    },
    psweasy: function (str) { //6-18位首字母开头
        var reg = /^[a-zA-Z]\w{5,17}$/;
        return reg.test(str);
    },
    pwwagain: function (str1, str2) { //确认密码
        return str1 === str2; //全等 恒等
    },
    urladr: function (str) { //路径：网址规则
        var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
        return reg.test(str);
    },
    name: function (str) { //账号字母开头,6-20位
        var reg = /^[a-zA-Z][\w\-]{5,19}$/;
        return reg.test(str);
    },
    chinese: function (str) { //中文
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },
    birthday: function (str) { //生日
        var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
        return reg.test(str);
    }
}


/*======================分页========================*/
var P = new Page();
//分页对象
function Page() {
    this.config = { elemId: '#page', pageIndex: '1', total: '0', pageNum: '4', pageSize: '8' };//默认参数
    this.version = '1.0';//分页版本
    this.requestFunction = null;//分页版本

    //初始化参数
    this.initMathod = function (obj) {
        $.extend(this.config, obj.params);//默认参数 + 用户自定义参数
        this.requestFunction = obj.requestFunction;
        this.renderPage();
    };

    //渲染分页
    this.renderPage = function () {
        this.requestFunction();
        this.pageHtml();

        //分页绑定事件
        $(P.config.elemId).on('click', 'a', function () {
            var flag = $(this).parent().hasClass('disabled');
            if (flag) {
                return false;
            }

            var pageIndex = $(this).data('pageindex');
            P.config.pageIndex = pageIndex;
            P.requestFunction();
            P.pageHtml();
        });
    };

    //分页合成
    this.pageHtml = function () {
        var data = this.config;
        if (parseInt(data.total) <= 0) {
            return false;
        }

        var elemId = data.elemId;
        var pageNum = isBlank(data.pageNum) ? 7 : parseInt(data.pageNum);//可显示页码个数
        var pageSize = isBlank(data.pageSize) ? 10 : parseInt(data.pageSize);//可显示页码个数
        var total = parseInt(data.total);//总记录数
        var pageTotal = total % pageSize != 0 ? parseInt(total / pageSize) + 1 : parseInt(total / pageSize);//总页数
        var pageIndex = pageTotal < parseInt(data.pageIndex) ? pageTotal : parseInt(data.pageIndex);//当前页
        var j = pageTotal < pageNum ? pageTotal : pageNum;//如果总页数小于可见页码，则显示页码为总页数
        var k = pageIndex < parseInt((j / 2) + 1) ? -1 * (pageIndex - 1) : pageIndex > (pageTotal - parseInt(j / 2)) ? -1 * (j - (pageTotal - pageIndex) - 1) : -1 * parseInt((j / 2));//遍历初始值
        var pageHtml = '<ul>';

        if (pageIndex <= 0 || pageIndex == 1) {
            pageHtml += '<li class="disabled"><a href="javascript:;" data-pageindex="' + pageIndex + '">首页</a></li>' +
                '<li class="disabled"><a href="javascript:;" data-pageindex="' + pageIndex + '">上一页</a></li>';
        } else {
            pageHtml += '<li><a href="javascript:;" data-pageindex="1">首页</a></li>' +
                '<li><a href="javascript:;" data-pageindex="' + (pageIndex - 1) + '">上一页</a></li>';
        }

        for (var i = k; i < (k + j); i++) {
            if (pageTotal == (pageIndex + i - 1)) break;
            if (i == 0) {
                pageHtml += '<li class="active"><a href="javascript:;" data-pageindex="' + pageIndex + '">' + pageIndex + '</a></li>';
            } else {
                pageHtml += '<li><a href="javascript:;" data-pageindex="' + (pageIndex + i) + '">' + (pageIndex + i) + '</a></li>';
            }
        }

        if (pageTotal == 1 || pageTotal <= pageIndex) {
            pageHtml += '<li class="disabled"><a href="javascript:;" data-pageindex="' + pageTotal + '">下一页</a></li>' +
                '<li class="disabled"><a href="javascript:;" data-pageindex="' + pageTotal + '">末页</a></li>';
        } else {
            pageHtml += '<li><a href="javascript:;" data-pageindex="' + (pageIndex + 1) + '">下一页</a></li>' +
                '<li><a href="javascript:;" data-pageindex="' + pageTotal + '">末页</a></li>';
        }
        pageHtml += '</ul>'
        $(elemId).html('');
        $(elemId).html(pageHtml);
    };
}

function isBlank(str) {
    if (str == undefined || str == null || str.trim() == '') {
        return true;
    }
    return false;
}
/*========================放大镜（基于jq）============= */
/*
          第一个参数是大图；
          第二个参数是小图集合，
          第三个参数是放大区域
          第四个参数是块级遮罩
      */
function Magnifier(bigpic, smartpic, area, kuai) {
    var left = 0;
    var top = 0;
    $(bigpic).mouseenter(function () {
        $(kuai).css('display', 'block');
        $(area).css('display', 'block');
        $(bigpic).mousemove(function (ev) {
            left = ev.pageX - $(bigpic).offset().left - ($(kuai).innerWidth() / 2);
            top = ev.pageY - $(bigpic).offset().top - ($(kuai).innerHeight() / 2);
            if (left < 0) {
                left = 0;
            }
            if (top < 0) {
                top = 0;
            }
            if (left > $(bigpic).innerWidth() - $(kuai).innerWidth()) {
                left = $(bigpic).innerWidth() - $(kuai).innerWidth();
            }
            if (top > $(bigpic).innerHeight() - $(kuai).innerHeight()) {
                top = $(bigpic).innerHeight() - $(kuai).innerHeight();
            }
            $(kuai).css({
                'left': left,
                'top': top
            });
            var scraleft = left / ($(bigpic).innerWidth() - $(kuai).innerWidth());
            var scratop = top / ($(bigpic).innerHeight() - $(kuai).innerHeight());
            $(area).find('img').eq(0).css({
                'top': -($(area).find('img').eq(0).innerHeight() - $(area).innerHeight()) * scratop,
                'left': -($(area).find('img').eq(0).innerWidth() - $(area).innerWidth()) * scraleft
            });
        });
    });
    $(bigpic).mouseleave(function () {
        $(kuai).css('display', 'none');
        $(area).css('display', 'none');
    });
    $(smartpic).find('img').click(function () {
        $(bigpic).find('img').eq(0).attr('src', this.src);
        $(area).find('img').eq(0).attr('src', this.src);
    });
}

//控制详情数量
function numControl() {
    let num = $('#num').val();
    $('#detailsMain').on('click', '#jia', function () {
        num++;
        if (num > $(this).parent().attr('data-num')) {
            num = $(this).parent().attr('data-num');
            $(this).attr('disabled', true);
        }
        else {
            $(this).parent().find('#num').prop('value', num);
        }
    });
    $('#detailsMain').on('click', '#jian', function () {
        num--;
        if (num < 1) {
            num = 1;
            $(this).attr('disabled', true);
        }
        else {
            $(this).parent().find('#num').prop('value', num);
        }
    });
    $('#detailsMain').on('keyup', '#num', function () {
        num = $('#num').val();
        if ($('#num').val() * 1 > $(this).parent().attr('data-num') * 1) {
            num = $(this).parent().attr('data-num');
        }
        $(this).parent().find('#num').prop('value', num);
    });
}