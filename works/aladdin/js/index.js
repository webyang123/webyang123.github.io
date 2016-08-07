$(document).ready(function(){
    var timeout=null;
    $(".big").on("mouseover",function(){
        clearTimeout(timeout)
        $(".big .prev, .big .next").fadeIn("slow");
    })
    $(".big").on("mouseout",function(){
        timeout=setTimeout(function () {
            $(".big .prev, .big .next").fadeOut("slow")
        }, 0);
    })
  var mySwiper = new Swiper (' .swiper-container', {
      direction: 'horizontal',
      loop: true,
      // 如果需要分页器
      pagination: ' .swiper-pagination',
      autoplay : 3000,
      speed:300,
      paginationClickable :true,
      autoplayDisableOnInteraction:false,
      onInit: function(swiper){
          swiper.swipeNext()
      }

    })
    $('.big .btnprev').click(function(){
    	mySwiper.swipePrev();
    })
    $('.big .btnnext').click(function(){
    	mySwiper.swipeNext();
    })
    // 荣誉
})
var mySwiper = new Swiper ('.rongyuSlid .swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: '.rongyuSlid .swiper-pagination',
    autoplay : 3000,
    speed:300,
    paginationClickable :true,
    autoplayDisableOnInteraction:false,
  })
