//$(function () {

    //滚轮滑动
    var h = $(window).height();
    $(".title_tab").height(h);
    $(window).resize(function(){
        var h = $(window).height();
        $(".title_tab").height(h);
    });
    var canMouse= true;
    $(document).on('mousewheel DOMMouseScroll', function(event, delta) {
    	
		event =  event||window.event;
        var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));
	    var h = $(window).height()-10;

        if (canMouse) {
            if($(document).scrollTop()<h){
                event.preventDefault();
            }
			// console.log(22);
             if(delta<0 && $(document).scrollTop()<h){
				canMouse= false;
				event.preventDefault();
			 // console.log(3);
                $("html,body").stop(false).animate({scrollTop:h},1000,'linear',function(){canMouse=true});
            }else  if(delta>0 && $(document).scrollTop()>10&&$(document).scrollTop()<h+20){
				canMouse= false;
			 	event.preventDefault();
				$("html,body").stop(false).animate({scrollTop:0},1000,'linear',function(){canMouse=true});
            }
		} else {
            event.preventDefault();
        }
    });
	
	
    //title_tab 切换
    var title_imgs = $(".title_tab ul li a .img");
    var title_texts = $(".title_tab ul li a .text");
    for (var i = 0; i < title_imgs.length; i++) {
        title_imgs.eq(i).css({
            "background": "url(img/hd"+(i+1)+".jpg) no-repeat center 0",
            "width": "100%",
            "height": "100%"
        });
    };
    var index = 0;
    var timer = setInterval(function(){
        index++;
        if (index >= 3) {
            index = 0;
            for (var j = 0; j < $(".title_tab ul li a .text").length; j++) {
                $(".title_tab ul li a .text").removeClass("text"+(j+1));
            }
        }
        for (var i = 0; i < $(".title_tab ul li").length; i++) {

            $(".title_tab ul li").eq(i).addClass("hide");
            $(".title_tab ul li").eq(i).removeClass("show");
            $(".title_tab ul li").eq(index).addClass("show");

        }
    },7000);

    //轮播图
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop:true,
        autoplay : 3000,
        speed:300,
         
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
    });


//});
$(function(){
	//tab-page3 
	$(".title_tab ul .hd3 a .text").css({
		"margin-left":"-550px"
	})
})
