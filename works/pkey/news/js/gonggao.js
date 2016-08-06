$(function(){
    $(".tab .tabtitle a").on("click",function(){
        $(".tab .tabtitle a").removeClass("on")
        $(this).addClass("on");
        $(".tabbox").hide();
        $(".tabbox").eq($(this).index()).show();
    })
})
