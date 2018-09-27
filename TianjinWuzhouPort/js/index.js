(function (w) {
    //在线监测与轨迹切换
    let $tab = $('.right_content>:nth-child(1)>p')
    $tab.on('click',(function() {
        var i = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
            $('.on img').css('display','block')
            $('.box_right>div').eq(i).show().siblings().hide();
        })
    );
    //js添加拖车li
    for(var i=0;i<12;i++){
        $('.list_che').append(`<li>
                                <input type="checkbox" value="" id="myCheck+${i}" class="myCheck">
                                <label for="myCheck+${i}"></label>
                                <p>拖车A1233451</p>
                                <div></div>
                            </li>`)
    }
    for(let i=0;i<5;i++){
        $('.list_che2').append(`<li>
                                <input type="checkbox" value="" id="myCheck2+${i}" class="myCheck">
                                <label for="myCheck2+${i}"></label>
                                <p>拖车A1233451</p>
                                <div></div>
                            </li>`)
    }
    //翻页三角
    $('.next_wrap').on('click',function (ev) {
        var $target = $(ev.target);
        if($target.prop("nodeName") == "LI"){
            $('.next_wrap>li').removeClass('on2')
            $target.addClass("on2");
        }
    })
    $('.next_wrap3').on('click',function (ev) {
        var $target = $(ev.target);
        if($target.prop("nodeName") == "LI"){
            $('.next_wrap3>li').removeClass('on3')
            $target.addClass("on3");
        }
    })
    //移入右侧显示
    $('.right').on('mouseover',function () {
        $('.right_content').css('transform', 'translateX(0)')
    })
    //点击三角收回
    $('.right_hide').on('click',function () {
        $('.right_content').css('transform', 'translateX(230px)')
    })

    laydate.render({
        elem: '#one_guiji'
        ,type: 'datetime'
        ,range: '~'
        ,format: 'M/d/H:m'
    });
    /*laydate.render({
        elem: '#test16'
        ,type: 'datetime'
        ,range: '到'
        ,format: 'yyyy年M月d日H时m分s秒'
    });*/
    //播放按钮
    var flag = true
    $('#play_2').on('click',function () {
        if(flag){
            $('#play_2>span').css({ 'background': 'url("./images/zanting.png") no-repeat left top',
                                    'background-size':'100% 100%',
                                    'margin': '11px 10px'
                                    })
            flag = false
        }else if(!flag){
            $('#play_2>span').css({ 'background': 'url("./images/play_but.png") no-repeat left top',
                                    'margin': '11px 15px'
            })
            flag = true
        }
    })
    
})(window)