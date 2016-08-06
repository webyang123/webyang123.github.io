$(function(){
    function setLoad(i){
        $(".loading_img").css("background-position", "-1" - 277 * i + "px -1px");
    }
    var _Timer ;
    var _Pos = 0,pec=0,canPlay=0;
    var  _TimerText;
    _Timer = setInterval(function () {
        if(_Pos<27) {
            _Pos++;
            setLoad(_Pos);
        }else{
            clearInterval(_Timer);
        }
    }, 400);
    _TimerText = setInterval(function () {
        if(pec<100&&pec<=_Pos*3+19){
            pec++;
            $(".loading_text").html(pec+"%");
        }else if (_Pos ==28&&canPlay==1) {
            pec++;
            $(".loading_text").html(pec+"%");
        }
        if(pec==100) {
            clearInterval(_TimerText);
            setLoad(28);
            $(".loading_img").fadeOut(800, function () {
                setLoad(29);

                $(".loading_img").fadeIn(1200,function(){
                    $(".loading").addClass("opacity_animate");
                    setTimeout(function(){
                        $(".loading").hide();
                        if(!-[1,]){
       						$(".centerVideo").remove();
    					} else {
    						$("#cg").get(0).play();
    					}
                        
                    },500);
                });
            });
        }
    },80);
    $("video").on("ended",function(){
        video_hide();
    })
    //点击跳过
    $(".skip").on("click",function(){
        video_hide();
    });
    function video_hide(){
        $(".centerVideo").addClass("opacity_animate");
        $("video").get(0).pause();
        setTimeout(function(){
            $(".centerVideo").hide();
        },500);
    }



    //关闭二维码
    $(".close_act").on("click",function(){
        $(".act_r").hide();
    });
    //关闭视频
    $(".close_layer").on("click",function(){
        $(".bg").hide();
        $(this).next().get(0).pause();
        $(".videoBox").hide();
    });


    $(".feel .next").on("click",function () {
        if ($(".focus_box ul li img")[0].src.indexOf("img/spec4.jpg")>=0) {
            feel_initial();
            //按钮 样式
    		btn_style(1);
    		$(".feel").hide();
            page_animat(2);
    		$(".engine").show();
            return;
        }
        var arr = [];
        var arr_left = [];
        for (var i = 0; i < $(".focus_box ul li").length; i++) {
            arr.push($(".focus_box ul li")[i]);
        }
        arr.push(arr.shift());
        for (var j = 0; j < arr.length; j++) {
            $(".focus_box ul").append(arr[j]);
        }
        $(".focus_box ul li").eq(0).attr("class","animat1");
        $(".focus_box ul li").eq(1).attr("class","animat2");
        $(".focus_box ul li").eq(2).attr("class","animat3");
        $(".focus_box ul li").eq(3).attr("class","animat4");
        $(".focus_box ul li").eq(4).attr("class","animat5");
    })


    $(".feel .prev").on("click",function () {
        if ($(".focus_box ul li img")[0].src.indexOf("img/spec5.jpg")>=0) {
           feel_initial();
            //按钮 样式
    		btn_style(3);
    		$(".feel").hide();
            page_animat(4);
    		$(".review").show();
            return;
        }
        var arr = [];
        var arr_left = [];
        for (var i = 0; i < $(".focus_box ul li").length; i++) {
            arr.push($(".focus_box ul li")[i]);
        }
        arr.unshift(arr.pop());
        for (var j = 0; j < arr.length; j++) {
            $(".focus_box ul").append(arr[j]);
        }
        $(".focus_box ul li").eq(0).attr("class","animat1_1");
        $(".focus_box ul li").eq(1).attr("class","animat2_2");
        $(".focus_box ul li").eq(2).attr("class","animat3_3");
        $(".focus_box ul li").eq(3).attr("class","animat4_4");
        $(".focus_box ul li").eq(4).attr("class","animat5_5");
    });

    // gif图切换
    $(".gif").hide();
    $(".gif").eq(0).show();
    var index = 1;
    setInterval(function () {
        $(".gif").hide();
        $(".gif").eq(index).show();
        index++;
        if (index > 3) {
            index = 0;
        }
    },4500);

    //engine btn
    $(".engine .next").on("click",function(){
        //按钮 样式
        btn_style(2);
        $(".engine").hide();
        page_animat(3);
        $(".honor").show();
    });
    $(".engine .prev").on("click",function(){
        feel_initial();
        //按钮 样式
        btn_style(0);
        $(".engine").hide();
        page_animat(1);
        $(".feel").show();
    });

    //honor btn
    $(".honor .next").on("click",function(){
        //按钮 样式
        btn_style(3);
        $(".honor").hide();
        page_animat(4);
        $(".review").show();
    });
    $(".honor .prev").on("click",function(){
        feel_initial();
        //按钮 样式
        btn_style(1);
        $(".honor").hide();
        page_animat(2);
        $(".engine").show();
    });
    //review btn
    $(".review .next").on("click",function(){
        //按钮 样式
        btn_style(0);
        $(".review").hide();
        page_animat(1);
        feel_initial();
        $(".feel").show();
    });
    $(".review .prev").on("click",function(){
        //按钮 样式
        btn_style(2);
        $(".review").hide();
        page_animat(3);
        $(".honor").show();
    });



    //honor tab切换
    $(".a a").on("click",function(){

        var li_img_index= $(this).index();
        $(".honor_tab").show();
        $(".trans ul li").eq(li_img_index).addClass("opacity");
        $(".trans ul li").eq(li_img_index).show();

        point_style(li_img_index);

        $(".point a").on("click",function(){
            li_img_index = $(this).index();
            $(".trans ul li").hide();
            $(".trans ul li").eq(li_img_index).addClass("opacity");
            $(".trans ul li").eq(li_img_index).show();
            point_style(li_img_index);
        })
        $(".bt_next").on("click",function(){
            $(".trans ul li").removeClass("opacity");
            li_img_index++;
            if (li_img_index > 8) {
                li_img_index = 0;
            }
            $(".trans ul li").hide();
            $(".trans ul li").eq(li_img_index).addClass("opacity");
            $(".trans ul li").eq(li_img_index).show();
            point_style(li_img_index);
        })
        $(".bt_prev").on("click",function(){
            $(".trans ul li").removeClass("opacity");
            li_img_index--;
            if (li_img_index < 0) {
                li_img_index = 8;
            }
            $(".trans ul li").hide();
            $(".trans ul li").eq(li_img_index).addClass("opacity");
            $(".trans ul li").eq(li_img_index).show();
            point_style(li_img_index);
        })
    });

    //point 样式
    function point_style(li_img_index) {
        $(".point a").attr("class","");
        $(".point a").eq(li_img_index).addClass("point_style");
    }
    //honor tab 关闭
    $(".btn_close").on("click",function(){
        // console.log(123);
        $(".honor_tab").hide();
        $(".trans ul li").hide();
    });

    //review tab
    for (var i = 0; i < $(".btn_wrap a").length-1; i++) {
        $(".btn_wrap a").eq(i).on("click",function(){
            var this_index = $(this).attr("index");
            $(".btn_wrap a").removeClass("on");
            $(".re_wrap ul li").removeClass("on");
            $(".btn_wrap a").eq(this_index).addClass("on");
            $(".re_wrap ul li").eq(this_index).addClass("on");
        })
    }
    flag = false;
    $(".btn_wrap a").eq(5).on("click",function(){
        // console.log(flag);
        if (flag == false) {
            $(".btn_wrap").addClass("close");
            $(".btn_wrap a").removeClass("on");
            $(".re_wrap ul li").removeClass("on");
            $(".btn_wrap a").eq(5).addClass("on");
            $(".re_wrap ul li").eq(5).addClass("on");
            flag = true;
        } else {
            $(".btn_wrap").removeClass("close");
            flag = false;
        }

    })
    //order 页面 单选
    $(".form a").on("click",function(){
        $(".form a").removeClass("on");
        $(this).addClass("on");
    })
    //返回首页
    $(".logo img").on("click",function(e){
        e.stopPropagation();
        $(".page").hide();
        feel_initial();
        $(".main").show();
        $(".h_nav a").removeClass("on");
        $(".header").removeClass("down");
        page_animat(0);
    })
    $(".btn_back").on("click",function(){
        $(".page").hide();
        feel_initial();
        $(".main").show();
        $(".h_nav a").removeClass("on");
        $(".header").removeClass("down");
        page_animat(0);
    })

    //导航栏 点击
    $(".nav a").on("click",function(){
        var num = $(this).index();
        $(".wrap .page").hide();
        $(".wrap .page").eq(num+1).show();
        $(".header").addClass("down");
        btn_style(num);
        page_animat(num+1);
    });
    $(".h_nav a").on("click",function(){
        var num = $(this).index();
        btn_style(num);
        $(".wrap .page").hide();
        $(".wrap .page").eq(num+1).show();
        feel_initial();
        page_animat(num+1);
    });

    //初始 feel 页面 大图切换动画 feel隐藏时 初始
    function feel_initial() {
        for (var i = 0; i < $(".focus_box ul li").length; i++) {
            $(".focus_box ul li").eq(i).attr("class","li"+(i+1));
        }
    }
    //上面导航栏 按钮显示
    function btn_style(btn_num) {
        $(".h_nav a").removeClass("on");
        $(".h_nav a").eq(btn_num).addClass("on");
    }
    //page 切换动画
    function page_animat(animat_num) {
        $(".wrap .page").eq(animat_num).addClass("opacity");
        setTimeout(function(){
        $(".wrap .page").eq(animat_num).removeClass("opacity");
        },500);
    }
})
function show(n) {
    
    if (!-[1,]) {
    	alert("您的浏览器版本过低请下载新版本");
    } else{
    	$(".bg").show();
    	$(".videoBox"+n+" video")[0].play();
    	$(".videoBox"+n).show();
    }
    
}
