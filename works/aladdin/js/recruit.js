$(".recruitleft li").on("click",function(){
    $(".recruitleft li").removeClass("active");
    $("this").addClass("active");
    $(".recruitright .section").hide();
    $(".recruitright .section").eq($(this).index()).show();
})
