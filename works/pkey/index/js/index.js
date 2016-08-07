$(function(){
    var allImg = ["img/bg.jpg","img/footer_bg.jpg","img/footer1.png","img/footer2.png","img/guide.png","img/logo.png","img/slogan.png"];
    var index = 0;
    for(var i=0; i<allImg.length; i++){
    	var imgObj = new Image();
    	imgObj.src = allImg[i];
    	imgObj.index = i;
    	imgObj.onload = function(){
    		index++;
            var a = Math.ceil(index/allImg.length*100)
    		if(a >= 100){
                $(".loade-wrap").fadeOut();
    		}
    	}
    }


    function SlideToAbout(){
		$('.nav a.to_left').hide();
        $('.nav a.to_right').show();
		$('.nav a.to_right').attr("date-text","home");
		$('.nav a.to_right .arrow_content').html("home");
        $('.page_more').css("left","0%");
        $('.page_home').css("left","100%");
        $('.retation_note').css("left","200%");
	}
    function SlideToRelation(){
		$('.nav a.to_right').hide();
		$('.nav a.to_left').attr("date_text","relation");
		$('.nav a.to_left .arrow_content').html("home");
        $('.retation_note').css("left","0%");
        $('.page_more').css("left","-200%");
        $('.page_home').css("left","-100%");
    }
    function SlideToHome(){
		$('.page_home').css("left","0%");
        $('.page_more').css("left","-100%");
        $('.retation_note').css("left","100%");
        $('.nav a.to_right, .nav a.to_left').show();
		$('.nav a.to_left').attr("date_text","about");
		$('.nav a.to_left .arrow_content').html("更多信息");
		$('.nav a.to_right').attr("date_text","contact");
		$('.nav a.to_right .arrow_content').html("联系我们");
	}

    function SlideToNote(){
		$('.page_note').css({
            "left":"0%",
            "top":"0%"
        });
        $('.page_relation').css({
            "left":"0%",
            "top":"-50%"
        });
        // $('.nav a.to_right').hide();
        $('.nav a.to_left .arrow_content').html("home");
	}
    function slideToUp() {
        $('.page_relation').css({
            "top":"0%"
        });
        $('.page_note').css({
            "top":"50%"
        });
    }
    function toRelation() {
        SlideToRelation();
        $(document).keydown(function(e){
            if (e.keyCode == 40) {
                // if ($('.page_relation')[0].offsetLeft == 0 && flage==false)
                if ($('.page_relation')[0].offsetLeft == 0 ){
                    console.log(123);
                    SlideToNote();
                    // flage = true;
                }
            } else if (e.keyCode == 38) {
                if ($('.page_relation')[0].offsetLeft == 0) {
                    console.log(345);
                    slideToUp();
                 }
            }
        });

        $(document).on('mousewheel DOMMouseScroll', function(e) {
            console.log(123);
            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                   (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
            if (delta < 0) {
               // 向下滚
            //    if ($('.page_relation')[0].offsetLeft == 0 && flage==false)
               if ($('.page_relation')[0].offsetLeft == 0 ){
                   console.log(123);
                   SlideToNote();
                //    flage = true;
               }
            }
        });
        $('.page_note').on('mousewheel DOMMouseScroll', function(e) {

            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                   (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
            if (delta > 0) {
               // 向上滚
               if ($('.page_relation').css("top","-100%")) {
                   console.log(345);
                   slideToUp();
                }
            }
        });
    }
    // flage = false;
    $(window).resize(function(){
    	var hw = $('html').width();
    	var hg = $('html').height();
    })

    $('.nav.center_nav a').each(function() {
        $(this).on('click',function(){
            console.log(123);
            var date_text = $(this).children()[1].innerHTML;
            var waitAnim = setTimeout(function(){

				if(date_text == "更多信息"){
					console.log("SlideToAbout");
					SlideToAbout();
				}
				else if(date_text == "联系我们"){
					console.log("SlideToContact");
                    toRelation();
                }
				else if(date_text == "home"){
                    SlideToHome();
                }
				clearTimeout(this);
			},500);
		});
    });
    $(document).keydown(function(event){
        if(event.keyCode == 37){
            if ($('.page_home')[0].offsetLeft == 0) {
                SlideToAbout();
            } else if ($('.retation_note')[0].offsetLeft == 0) {
                SlideToHome;
            }
        }else if (event.keyCode == 39){
            if ($('.page_home')[0].offsetLeft == 0) {
                toRelation();
            }  else if ($('.page_home')[0].offsetLeft == hw) {
                SlideToHome;
            }
        }
    });

    $(".dong").focus(function(){
        $(this).css("margin-left","-60px");
        $(this).prev().css({
            "margin-left":"-30px",
            "opacity":"0"
        });
    });
    $(".dong").blur(function(){
        $(this).css("margin-left","0px");
        $(this).prev().css({
			"left":"0",
            "margin-left":"0",
            "opacity":"1"
        })
    });
})
