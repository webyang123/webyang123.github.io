$(function(){
    var top;
    $(window).scroll(function(){
        top = $(window).scrollTop();
    });
    $(".nav a").on("click",function(){
        var index = $(this).index(".nav a");

        var text = $("#content>div").eq(index).html();
        if (text=="") {
            alert("暂未开启，敬请期待！");
            return;
        } else {
            $("#content>div").hide();
            $("#content>div").eq(index).show();
        }
        $(".nav a").removeClass("on");
        $(".nav a").eq(index).addClass("on");

    });

    //图片浏览
    $(".call_picture a").on("click",function(){
        var img_index = $(this).index();
        var src = $(this).attr("data");
console.log(img_index);
        $(".big_img_border img").get(0).src = src;
        $(".img_number").html("Image "+(img_index+1)+" of 24");

        $(".bg").show();
        $(".big_img_wrap").show();
        $(".big_img_wrap").css({
            "top": (top + 50)+"px"
        });

        $(".big_img_border img").addClass("on");
        setTimeout(function(){
            $(".big_img_border img").removeClass("on");
        },600);

        $(".img_next").on("click",function(){
            img_index++;
            if (img_index > 23) {
                img_index = 0;
            }
            img_change(img_index)
        })
        $(".img_prev").on("click",function(){
            img_index--;
            if (img_index < 0) {
                img_index = 23;
            }
            img_change(img_index);
        })
    });
    function img_change(img_index) {
        src = $(".call_picture a").eq(img_index).attr("data");
        $(".big_img_border img").get(0).src = src;
        $(".img_number").html("Image "+(img_index+1)+" of 24");
        $(".big_img_border img").addClass("on");
        setTimeout(function(){
            $(".big_img_border img").removeClass("on");
        },600);
    }
    $(".img_close").on("click",function(){
        $(".bg").hide();
        $(".big_img_wrap").hide();
    });

    //视频浏览
    $(".call_video .call_video_ul li").on("click",function(){
        var src = $(this).attr("date-src");
        $(".video_box video")[0].src = src;
        $(".bg").show();
        $(".modal").show();
    });

    $(".close_video").on("click",function(){
        $(".bg").hide();
        $(".modal").hide();
        $(".video_box video").get(0).pause();
    })
})
