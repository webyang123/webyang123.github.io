//$(function(){
    var aside = $('<div class="bg_icon down_wrap"><div class="down_tab"><a class="ipad_on" href="javascript:;"></a><a class="iphone_on" href="javascript:;"></a><a class="andriod_on" href="javascript:;"></a></div><div class="down_tabPage"><div class="bg_icon box"></div></div></div><div class="bg_icon weixin"></div><div class="bg_icon media_links"><div class="links_select"><span>合作媒体</span><i class="bg_icon arrows"></i></div><div class="links_content"><a href="http://news.17173.com/z/badboy/" target="_blank">17173</a><a href="http://www.18183.com/whzz/" target="_blank">18183</a><a href="http://shouyou.gamersky.com/z/badboy/" target="_blank">游民星空</a><a href="http://www.ptbus.com/whzz/" target="_blank">口袋巴士</a><a href="http://www.18touch.com/zhuan/10316050" target="_blank">超好玩</a><a href="http://www.pipaw.com/badboy/" target="_blank">琵琶网</a><a href="http://online.gamedog.cn/detail/499108/" target="_blank">游戏狗</a><a href="http://www.youxiduo.com/game/z133938/" target="_blank">游戏多</a><a href="http://www.1688wan.com/whzz/" target="_blank">1688玩</a><a href="http://www.mofang.com/badboy/" target="_blank">魔方网</a><a href="http://www.gao7.com/whzz" target="_blank">搞趣网</a><a href="http://zhuanqu.candou.com/whzz" target="_blank">蚕豆网</a><a href="http://www.wankr.com.cn/zt/whzz/" target="_blank">玩客</a><a href="http://www.3dmgame.com/games/badboy/" target="_blank">3DM</a><a href="http://www.4399.cn/" target="_blank">4399手机游戏网</a></div></div>');
    $(".aside").append(aside);

    $(".down_wrap").css({
        "width": "299px",
        "height": "358px",
        "background-position": "-459px -495px"
    });
    $(".down_tab").css({
        "margin": "85px 0 0 12px"
    });
    $(".down_tab a").css({
        "width": "92px",
        "height": "98px"
    });
    $(".ipad_on").css("background-position"," -969px -395px");
    $(".iphone_on").css("background-position"," -1px -395px");
    $(".andriod_on").css("background-position"," -969px -95px");
    $(".down_tabPage").css({
        "position": "absolute",
        "top": "212px",
        "left": "10px"
    });

    $(".bg_icon").css({
        "background-image": "url(img/icon.png)",
        "background-repeat": "no-repeat",
        "overflow": "hidden",
        "display": "inline-block"
    });
    $(".down_tab a").css({
        "background-image": "url(img/icon.png)",
        "background-repeat": "no-repeat",
        "overflow": "hidden",
        "display": "inline-block"
    });


    $(".box").css({
        "width": "280px",
        "height": "115px",
        "background-position": "-1px -898px"
    });
    $(".weixin").css({
        "margin-top": "30px",
        "width": "299px",
        "height": "305px",
        "background-position": "-760px -495px"
    });
    $(".media_links").css({
        "margin-top": "30px",
        "position": "relative",
        "overflow": "visible",
        "width": "299px",
        "height": "126px",
        "background-position": "-760px -802px"
    });
    $(".links_select").css({
        "display": "block",
        "margin-top": "40px",
        "margin-left": "20px",
        "width": "256px",
        "height": "42px",
        "line-height": "42px",
        "border": "1px solid #ead498",
        "color": "#ead498",
        "text-indent": "1em",
        "font-size": "16px",
        "cursor": "pointer"
    });
    $(".links_select span").css({
        "margin-top": "8px",
        "width": "200px",
        "height": "25px",
        "line-height": "25px",
        "display": "block",
        "float": "left"
    });
    $(".arrows").css({
        "margin-top": "15px",
        "margin-right": "10px",
        "float": "right",
        "width": "25px",
        "height": "14px",
        "background-position": "-1008px -1px"
    });
    $(".links_content").css({
        "position": "absolute",
        "top": "92px",
        "left": "21px",
        "width": "256px",
        "border": "1px solid #ead498",
        "background": "#3f3f3f",
        "height": "170px",
        "overflow-x": "hidden",
        "overflow-y": "auto",
        "display": "none"
    });
    $(".links_content a").css({
        "display": "block",
        "font-size": "14px",
        "text-indent": "1.5em",
        "height": "30px",
        "line-height": "30px",
    });

    $(".down_tab a").hover(
        function(){
            $(".down_tabPage .box").css({
                "opacity":"1",
                "display":"none"
            })
            // var timer = setTimeout(function(){
            //     $(".box").removeClass("opacity_animate");
            // },300);
            // $(".box").addClass("opacity_animate");

            $(".down_tabPage .box").fadeIn(300);

            var classname = $(this).attr("class");
            if (classname == "ipad_on") {
                $(".ipad_on").css("background-position","-969px -395px");
                $(".iphone_on").css("background-position","-1px -395px");
                $(".andriod_on").css("background-position","-969px -95px");
                $(".box").css({
                    "background-position": "-1px -898px"
                });
            } else if (classname == "iphone_on") {
                $(".ipad_on").css("background-position","-966px -295px");
                $(".iphone_on").css("background-position","-95px -395px");
                $(".andriod_on").css("background-position","-969px -95px");
                $(".box").css({
                    "background-position": "-283px -898px"
                });
            } else if (classname == "andriod_on") {
                $(".ipad_on").css("background-position","-966px -295px");
                $(".iphone_on").css("background-position","-1px -395px");
                $(".andriod_on").css("background-position","-966px -195px");
                $(".box").css({
                    "background-position": "-283px -898px"
                });
            }
        },function(){
        }
    );

    //合作媒体
    $(".links_select").on("click",function(e){
        e.stopPropagation();
        $(".links_content").show();
    });
    $(document).on("click",function(){
        $(".links_content").hide();
    });
//});
