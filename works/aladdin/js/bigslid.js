var lis=$(".wrapper li");
var widths;
function widthchange(){
    widths=$(window).width();
    if (widths<=1280) {
        widths=1280;
    }
    $(".wrapper").width(widths*3);
    lis.width(widths);
}
widthchange();
$(window).resize(function(){
    widthchange();
})
var timer=null;
var timers=null;
var num=0;
// 走完一个动画的过程
var speed=0;
function animateone(){
    var start=$(".wrapper")[0].offsetLeft;
    var end=-num*widths;
    var step=0;
    var maxStep=30;
    if (timer) {
        clearInterval(timer)
    }
    timer=setInterval(function () {
        step++;
        if (step==maxStep) {
            clearInterval(timer)
        }
        var leftchange=start+(end-start)/maxStep*step;
        $(".wrapper").css("left",leftchange)

    }, 16);
}
//自动切换
var dong=function(){
    if (timers) {
        clearInterval(timers);
    }
    timers=setInterval(function () {
        num++;
        if (num==lis.length) {
            num=0;
        }
        animateone();
        btnsRed(num);
    }, 2000);
}
dong();
var btnsRed=function(num){
    for (var i = 0; i < $(".btns span").length; i++) {
        $(".btns span")[i].className=" ";
    }
    $(".btns span")[num].className="active";
}

$(".prev").on("click",function(){
    clearInterval(timers);
    num--;
    if(num < 0){
        num = lis.length-1;
    }
    btnsRed(num);
    animateone()
    dong();
})
$(".next").on("click",function(){
    clearInterval(timers);
    num++;
    if(num == lis.length){
        num = 0;
    }
    btnsRed(num);
    animateone()
    dong();
})
//按钮
for (var i = 0; i < $(".btns span").length; i++) {
    $(".btns span")[i].index=i;
    $(".btns span")[i].onclick=function(){
        clearInterval(timers);
        num=this.index;
        btnsRed(num);
        animateone()
        dong();

    }
}
