(function (w) {
    //table切换
    let $tab = $('.content_footer_left>li')
    $tab.on('click',(function() {
            var i = $(this).index();
            $(this).addClass('active1').siblings().removeClass('active1');
            $('.content_footer_right>div').eq(i).show().siblings().hide();
        })
    );
    //翻页三角
    $('.footer1').on('click',function (ev) {
        var $target = $(ev.target);
        if($target.prop("nodeName") == "DIV"){
            $('.footer1>div').removeClass('on4')
            $target.addClass("on4");
        }
    })
    $('.footer2').on('click',function (ev) {
        var $target = $(ev.target);
        if($target.prop("nodeName") == "DIV"){
            $('.footer2>div').removeClass('on5')
            $target.addClass("on5");
        }
    })
})(window)