$(function(){
    $(".navs li").hover(function(){
        $(".navs li").removeClass("on");
        $(this).addClass("on");

        $(".content_wrap").removeClass("opacity");
        $(".content_wrap").eq($(this).index()).addClass("opacity");
        $(".content_wrap").hide();
        $(".content_wrap").eq($(this).index()).show();
    })
    $(".hall_btn a").hover(function(){
        var index = $(this).index();
        $(".hall_btn a").removeClass("on");
        $(this).addClass("on");
        $(".navs li").removeClass("opacity");
        $(".hall li").addClass("opacity");

        $(".hall li").hide();
        $(".hall li").eq(index).show();

    })

    $(window).scroll(function(){
	 var t = $(document).scrollTop();
	//  console.log(t)
	 if(t>=200){
		 $('.navs').addClass('scroll')
	 }else{
		 $('.navs').removeClass('scroll')
	 }
    })

    $(".tabTitle1 a").hover(function(){
        $(".tabTitle1 a").removeClass("on");
        $(this).addClass("on");
        $(".tab_box1 .box").removeClass("block opacity");
        $(".tab_box1 .box").eq($(this).index()).addClass("block opacity");
    })
    $(".tabTitle2 a").hover(function(){
        $(".tabTitle2 a").removeClass("on");
        $(this).addClass("on");
        $(".tab_box2 .box").removeClass("block opacity");
        $(".tab_box2 .box").eq($(this).index()).addClass("block opacity");
    })
    $(".tabTitle3 a").hover(function(){
        $(".tabTitle3 a").removeClass("on");
        $(this).addClass("on");
        $(".tab_box3 .box").removeClass("block opacity");
        $(".tab_box3 .box").eq($(this).index()).addClass("block opacity");
    })
    $(".tabTitle4 a").hover(function(){
        $(".tabTitle4 a").removeClass("on");
        $(this).addClass("on");
        $(".tab_box4 .box").removeClass("block opacity");
        $(".tab_box4 .box").eq($(this).index()).addClass("block opacity");
    })
    $(".heroCtrl li").mouseenter(function(){
        if(!$(this).hasClass("on")&&!$(this).hasClass("disable")){
        	var $p =$(this).parent();
        	var n =$(this).data("i"),i =$p.find("li").index($(this));
        	$p.find("li").removeClass("on").eq(i).addClass("on");
        	$(this).parents(".box").find(".heroBg").hide().prop("class","heroBg heroBg"+n).fadeIn(500);
        }
    });
})
