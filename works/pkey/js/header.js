//$(function(){

	//css
	var width = $(".center-x").width();

	$(".center-x").css({
		"margin-left": -width/2+"px"
	})
	var height = $(".center-y").height();

	$(".center-y").css({
		"margin-top": -height/2+"px"
	})


    var header = $("<div class='center'><a href='/' class='logo'><img src='img/h_logo.png' alt='乌合之众LOGO'></a><ul class='h_nav'><li><a href='../home/index.html'> <em>官方首页</em><i>HOME</i></a></li><li><a href='../news/gonggao.html'> <em>新闻公告</em><i>NEWS</i></a></li><li><a href='../intro/index.html'> <em>游戏特色</em><i>INTRO</i></a></li><li class='h_nav_s'><a href='../show/index.html'> <em>影音专区</em><i>SHOW</i></a></li><li><a href='../tutorial/index.html' target='_blank'> <em>新手指南</em><i>tutorial</i></a></li><li><a href='http://tieba.baidu.com/f?kw=%E4%B9%8C%E5%90%88%E4%B9%8B%E4%BC%97&ie=utf-8&tp=0' target='_blank'><em>玩家社区</em><i>community</i></a></li></ul></div>");
    $(".header").append(header);
    $(".header").css({
        "width": "100%",
        "height": "170px",
        "position": "absolute",
        "top": "0",
        "left": "0",
        "z-index": "100",
        "background-image": "url(img/top_bg.png)",
        "background-repeat":  "no-repeat",
        "background-position": "center 0"
    });
    $(".header .center").css({
        "margin": "0 auto",
        "width": "1200px",
        "height": "100%",
        "position": "relative"
    });
    $(".header .logo").css({
    	"position": "absolute",
    	"top": "0",
    	"left": "50%",
    	"margin-left": "-135px",
        "width": "269px",
        "height": "173px"
    });
    $(".header .h_nav li").css({
        "display": "block",
        "float": "left",
        "width": "170px",
        "height": "40px"
    });
    $(".header .h_nav li a").css({
        "display": "block",
        "line-height": "60px",
        "font-size": "14px",
        "color": "#ead498",
        "text-align": "center"
    });
    $(".header em").css({
        "display": "block",
        "line-height": "30px",
        "font-style": "normal",
        "font-size": "18px"
    });
    $(".header .h_nav li a em").css({
        "font-weight": "bolder",
        "color": "white",
        "margin-top": "28px"
    });
    $(".header .h_nav li a i").css({
        "display": "block",
        "line-height": "20px",
        "font-style": "normal",
        "font-weight": "normal",
        "font-size": "12px",
        "text-transform": "uppercase",
        "color": "#fff"
    });
    $(".header .h_nav .h_nav_s").css({
        "margin-left": "170px"
    })
//})
