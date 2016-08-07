$(function () {
    var imgSrc = ['imgs/car.png','imgs/close_music.png','imgs/dialog_fail.png','imgs/dialog_success.png','imgs/light.png','imgs/one_music.gif','imgs/page_cai_collection2.png','imgs/page_cai_collection3.png','imgs/page_cai_collection4.png','imgs/page_level5_list.jpg','imgs/page_car_bg.jpg','imgs/page_great_eye.png','imgs/page_home_bg.jpg','imgs/page_home_btn.png','imgs/page_home_car.png','imgs/page_home_identify.png','imgs/page_home_intro.png','imgs/page_home_true.png','imgs/page_level1_fail.jpg','imgs/page_level1_icon.jpg','imgs/page_level1_list.jpg','imgs/page_level2_fail.jpg','imgs/page_level2_icon.jpg','imgs/page_level2_list.jpg','imgs/page_level3_fail.jpg','imgs/page_level3_icon.jpg','imgs/page_level3_list.jpg','imgs/page_level4_fail.jpg','imgs/page_level4_icon.jpg','imgs/page_level4_list.jpg','imgs/page_level5_fail.jpg','imgs/page_level5_icon.jpg','imgs/page_level5_list.jpg','imgs/page_loading_bg.jpg','imgs/page_loading_car.png','imgs/page_result_bad_0.png','imgs/page_result_bad_bg.jpg','imgs/page_result_bad_tears.png','imgs/page_result_great_bg.jpg','imgs/page_result_ok_2.png','imgs/page_result_ok_arrow.png','imgs/page_result_ok_bg.jpg','imgs/page_result_ok_heng.png','imgs/page_result_ok_rate.png','imgs/page_share_guide.png','imgs/rain_one.png','imgs/rain_two.png', 'imgs/shang.jpg','imgs/uicon.png'];
    //进度条百分比
    var percent=0;
    var loaded = 0;
    var toload = imgSrc.length;
    var timer = setInterval(function () {
        percent++;
        if (percent<=100) {
            $(".load .load_progress").html(percent+"%");
        }
        else {
            clearInterval(timer); //预加载
            for (var i = 0; i < imgSrc.length; i++) {
                var img = new Image();
                img.onload = function () {
                    loaded++;
                    if (loaded>=toload) {
                        $(".page").hide();
                        $(".home").show();
                    }
                }
                img.src = imgSrc[i];
            }
        }
    },10)
    //背景音乐切换开关
    var btn_flag = true;
    $("#btn_music").on("click",function () {
        if (btn_flag) {
            $("#btn_music audio")[0].pause();
            $("#btn_music").css("background-image","url(imgs/close_music.png)");
            btn_flag=false;
        } else {
            $("#btn_music audio")[0].play();
            $("#btn_music").css("background-image","url(imgs/one_music.gif)");
            btn_flag=true;
        }
    })

    // 点击开始吧
    $(".home #start_btn").on(" click",function () {
        $(".page").hide();
        $(".level").show();
    })
    //封装函数,换大图和文字图
    function bgFun(pic,bgNum) {
        $(".level .level_picture").css("background-image","url(imgs/page_level"+pic+"_icon.jpg)");
        $(".level .select_word").css("background-image","url(imgs/page_level"+pic+"_list.jpg)");
        for (var i = 0; i < holders.length; i++) {
            holders.eq(i).hide();
        }
        holders.eq(bgNum).show();
    }
    //失败大图
    function failFun(img) {
        $(".level .level_picture").css("background-image","url(imgs/page_level"+img+"_fail.jpg)");
    }
    //关与关切换，清除相关内容
    function appearFun() {
        $(".bg").hide();
        $("._success").hide();
        $("._fail").hide();
        $(".level .answer_holder .word").html("");
        for (var i = 0; i < btns.length; i++) {
            btns.eq(i).html("");
        }
        arrVal=[];
        num = -1;
        index++;
    }
    //结果，判断出现哪一页
    function result() {
        $(".bg").hide();
        $(".level").hide();
        $("._success").hide();
        $("._fail").hide();
        $("#btn_music").hide();
        if (right==5) {
            $("._great").show();
        } else if (right>=3) {
            $("._ok").show();
        } else if (right<=2) {
            $("._bad").show();
        }
    }
    //随机
    function randomNum(min,max) {
        return parseInt(Math.random() * (max - min + 1) + min);
    }
    //结果比例
    function scoretitle() {
        var badArr = ["87.21%","91.47%"];
        $("._bad .score_line").html("被全国"+badArr[randomNum(0,1)]+"的人击败了");
        var okArr = ["68.6%","72.9%","83.7%"];
        $("._ok .score_line").html("击败全国"+okArr[randomNum(0,2)]+"的人");
    }

    //文字数组
    var arr1 = ["小","图","模","专","拼","快","画","车"];
    var arr2 = ["口","一","咬","钱","嘴","张","齿","价"];
    var arr3 = ["安","两","基","友","限","全","禁","人"];
    var arr4 = ["起","脚","低","踩","包","红","步","价"];
    var arr5 = ["线","乌","毛","路","规","球","划","鹿"];
    //
    var words1 = $(".level .answer_holder1 .word");
    var words2 = $(".level .answer_holder2 .word");
    var words3 = $(".level .answer_holder3 .word");
    var btns = $(".level .select_word .btn");
    var holders = $(".level .answer_holder");
    var succText = $("._success .content p");
    var failText = $("._fail .content p");
    //变量
    var index = 1;
    var num = -1;
    var arrVal = [];
    var right = 0;
    //点击文字
    btns.on("click",function () {
        var flag = true;
        switch (index) {
            case 1:
                if (arrVal.length<2) {
                    for (var i = 0; i < arrVal.length; i++) {
                        if (arrVal[i] == $(this).index()) {
                            flag = false;
                        }
                    }
                    if (flag == true) {
                        num++;
                        arrVal.push($(this).index());
                        words1.eq(num).html(arr1[$(this).index()]);
                    }
                }
                if (arrVal.length==2) {
                    if (arrVal[0]==4 && arrVal[1]==7) {
                        right++;
                        setTimeout(function () {
                            $(".bg").show();
                            $("._success").show();
                        },500)
                        setTimeout(function () {
                            appearFun();
                            bgFun(2,1);
                        },2500)
                    } else {
                        failFun(1);
                            setTimeout(function () {
                            $(".bg").show();
                            $("._fail").show();
                        },500)
                            setTimeout(function () {
                            appearFun();
                            bgFun(2,1);
                        },2500)
                    }
                }
                break;
            case 2:
                if (arrVal.length<3) {
                    for (var i = 0; i < arrVal.length; i++) {
                        if (arrVal[i] == $(this).index()) {
                            flag = false;
                        }
                    }
                    if (flag == true) {
                        num++;
                        arrVal.push($(this).index());
                        words2.eq(num).html(arr2[$(this).index()]);
                    }
                }
                if (arrVal.length==3) {
                    if (arrVal[0]==1 && arrVal[1]==0 && arrVal[2]==7) {
                        right++;
                        setTimeout(function () {
                            $(".bg").show();
                            $("._success").show();
                            succText.html("2016年必须知道的</br>七大定律之一:</br>拼车一口价，车费不变定律");
                        },500)
                        setTimeout(function () {
                            appearFun();
                            bgFun(3,1);
                        },2500)
                    } else {
                        failFun(2);
                            setTimeout(function () {
                            $(".bg").show();
                            $("._fail").show();
                            failText.html("这都不造哎</br>注定一辈子吃土！");
                        },500)
                            setTimeout(function () {
                            appearFun();
                            bgFun(3,1);
                        },2500)
                    }
                }
                break;
            case 3:
                if (arrVal.length<3) {
                    for (var i = 0; i < arrVal.length; i++) {
                        if (arrVal[i] == $(this).index()) {
                            flag = false;
                        }
                    }
                    if (flag == true) {
                        num++;
                        arrVal.push($(this).index());
                        words2.eq(num).html(arr3[$(this).index()]);
                    }
                }
                if (arrVal.length==3) {
                    if (arrVal[0]==4 && arrVal[1]==1 && arrVal[2]==7) {
                        right++;
                        setTimeout(function () {
                            $(".bg").show();
                            $("._success").show();
                            succText.html("你们要的虐狗套餐，</br>拼车想当于</br>两人同行一人免单</br>上限两人哦~");
                        },500)
                        setTimeout(function () {
                            appearFun();
                            bgFun(4,2);
                        },2500)
                    } else {
                        failFun(3);
                            setTimeout(function () {
                            $(".bg").show();
                            $("._fail").show();
                            failText.html("除了基友</br>你木有盆友了咩！");
                        },500)
                            setTimeout(function () {
                            appearFun();
                            bgFun(4,2);
                        },2500)
                    }
                }
                break;
                case 4:
                    if (arrVal.length<4) {
                        for (var i = 0; i < arrVal.length; i++) {
                        if (arrVal[i] == $(this).index()) {
                                flag = false;
                            }
                        }
                        if (flag == true) {
                            num++;
                            arrVal.push($(this).index());
                            words3.eq(num).html(arr4[$(this).index()]);
                        }
                    }
                    if (arrVal.length==4) {
                        if (arrVal[0]==2 && arrVal[1]==7 && arrVal[2]==0 && arrVal[3]==6) {
                            right++;
                            setTimeout(function () {
                                $(".bg").show();
                                $("._success").show();
                                succText.html("老板发的红包太小，</br>买不起汉堡......</br>快车我还坐得起哒~");
                            },500)
                            setTimeout(function () {
                                appearFun();
                                bgFun(5,2);
                            },2500)
                        } else {
                            failFun(4);
                                setTimeout(function () {
                                $(".bg").show();
                                $("._fail").show();
                                failText.html("歪！脚气很重么朋友！");
                            },500)
                                setTimeout(function () {
                                appearFun();
                                bgFun(5,2);
                            },2500)
                        }
                    }
                    break;
                case 5:
                    if (arrVal.length<4) {
                        for (var i = 0; i < arrVal.length; i++) {
                        if (arrVal[i] == $(this).index()) {
                                flag = false;
                            }
                        }
                        if (flag == true) {
                            num++;
                            arrVal.push($(this).index());
                            words3.eq(num).html(arr5[$(this).index()]);
                        }
                    }
                    if (arrVal.length==4) {
                        if (arrVal[0]==4 && arrVal[1]==6 && arrVal[2]==3 && arrVal[3]==0) {
                            right++;
                            setTimeout(function () {
                                $(".bg").show();
                                $("._success").show();
                                succText.html("新手出门不怕堵，</br>这有一百种捷径让所有路线</br>都顺理成章");
                            },500)
                                setTimeout(function () {
                                result();
                                scoretitle();
                            },2500)
                        } else {
                            failFun(5);
                                setTimeout(function () {
                                $(".bg").show();
                                $("._fail").show();
                                failText.html("想象力已突破天际，</br>还是甩不掉路痴的命");
                            },500)
                                setTimeout(function () {
                                result();
                                scoretitle();
                            },2500)
                        }
                    }
                    break;
                }
            })
        //分享
        $("._great .btn_share").on("click",function () {
            $(".bg").toggle();
            $("._great .guide").toggle();
            $(".bg").on("click ",function () {
                $(".bg").hide();
                $("._great .guide").hide();
            })
            $("._great .guide").on("click",function () {
                $(".bg").hide();
                $("._great .guide").hide();
            })
        })
        //奖励
        $(".result .btn_prize").on("click",function () {
            $("._page").hide();
            $("._prize").show();
        })
        $(".page .btn_prize").on("click",function () {
            $("#btn_music audio")[0].pause();
        })
        //重新开始
        $(".result .btn_restart").on("click",function () {
            $(".result").hide();
            $(".level").show();
            appearFun();
            bgFun(1,0);
            index = 1;
            right = 0;
        })

})
