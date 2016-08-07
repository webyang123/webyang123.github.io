$(function () {
    //图片预加载
    var imgSrc = ['imgs/首页分享.png','imgs/运气.png','imgs/page1_btn_video_active.png','imgs/page1_btn_pic.png','imgs/视频.png','imgs/commen_close.png','imgs/page1_head.png','imgs/nav_bg.png','imgs/main_bg.png','imgs/foot_bg.png','imgs/liangdian1.png','imgs/liangdian2.png','imgs/liangdian3.png','imgs/liangdian4.png','imgs/liangdian5.png','imgs/layer_info_submit.png','imgs/page2_btn_intro.png','imgs/page2_btn_start.png','imgs/start.png','imgs/layer_info_select.jpg','imgs/start.png','imgs/page3_choosed_bg.png',
    'imgs/抽奖背景.png','imgs/抽奖下拉背景.png','imgs/转盘.png','imgs/point.png','imgs/下注.png','imgs/layer_prize.png','imgs/layer_prize_none.png','imgs/选项1.png','imgs/选项2.png','imgs/选项3.png','imgs/选项4.png','imgs/page4_tip.png','imgs/371_1453779101.png'];
    var loaded = 0;
    var toload = imgSrc.length;
    for (var i = 0; i < imgSrc.length; i++) {
        var img = new Image(); //获取图片
        img.onload = function () {
            loaded++;
            var percent = parseInt(loaded/toload * 100);
            if (percent >= 100) {
                $('.onload').hide();
                $('#page1').show();  //-----------------------
            }
            $('.point').css({
                '-webkit-transform-origin':' bottom center',
                '-webkit-transform':'rotate('+(-150 + percent/100*300)+'deg)',
                'transition':'all 0.1s linear'
            })
            $('#percent').html(percent+'%');
        }
        img.src = imgSrc[i];
    }
    $('#syfx').click(function () {
        alert('分享未开放');
    })
    //点击首页
    //遍历li，添加active样式
    $('.additive').each(function (index,val) {
        $(val).on('click',function () {
            $('.additive').removeClass('active');
            $(this).addClass('active');
        })
    })
    //点击活动说明
    $('nav .state').click(function() {
        $('#layer1').show();
        //自定义滚动条
            var myscroll=new IScroll("#wrapper",{
                hScrollbar:false,
                vScrollbar:false,
                click:true,
                bounce:false
            });
    });
    $('#layer1 a').click(function () {
        $('#page1').show();
        $('#layer1').hide();
    });
    //点击中奖名单
    $('nav .award').click(function () {
        $('#layer2').show();
    });
    $('#layer2 a').click(function () {
        $('#page1').show();
        $('#layer2').hide();
    });
    //点击精彩视频按钮
    $('#video_btn').click(function () {
        $('#video_btn').attr({
            "src" : "imgs/page1_btn_video_active.png",
        })
        $('#show_btn').attr({
            "src" : "imgs/page1_btn_pic.png" ,
        })
        $('.swiper-container').hide();
        $('.video').show();
    });
    //点击亮点展示按钮
    $('#show_btn').click(function () {
        $('#show_btn').attr({
            "src" : "imgs/page1_btn_pic_active.png" ,
        })
        $('#video_btn').attr({
            "src" : "imgs/page1_btn_video.png",
        })
        $('.swiper-container').show();
        $('.video').hide();
        //Swiper
        var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: 2000,//可选选项，自动滑动
            autoplayDisableOnInteraction:false,
            // 如果需要前进后退按钮
           nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev',
            })
    });
    //视频播放
    $('#video_start').click(function () {
        $('video').get(0).play();
        $('#video_start').hide();
    })
    $('video').on("click",function () {
        $('video').get(0).pause();
        $('#video_start').show();
    })
    // var startY,endY,nowy;
    // var t = 0;
    // // var mint = $('#content1').height()-$('#intro1').height();
    // // console.log(mint);
    // $('#content1').get(0).addEventListener('touchstart',function (e) {
    //     startY = e.touches[0].pageY;
    //     nowy= parseInt($('#intro1').css('top'));
    //     // console.log(nowy);
    //     // console.log(startY);
    // },false)
    // $('#content1').get(0).addEventListener('touchmove',function (e) {
    //     endY = e.touches[0].pageY;
    //     t = nowy + endY - startY;
    //     // console.log(endY);
    //     if (t>=0) {
    //         t = 0;
    //     }
    //     // if (t<=mint) {
    //     //     t = mint;
    //     // }
    //     $('#intro1').css('top',t+'px')
    // },false)

    $('#luck').click(function () {
        $('#page2').show();      //----------------------------
    });
    $('#page2>img').click(function () {
        $('#page2').hide();
    });
    //表单
    //将省份添加到省份栏中
    $('select[name=province]').on('touchstart',function () {
        $('select[name=province]').html('<option value = "">请选择</option>');
        $('select[name=city]').html('<option value = "">请选择</option>'); //清除上次预留
        $('select[name=dealers]').html('<option value = "">请选择</option>');
        var provinces = data['0'];
        for (key in provinces) {
            $('<option value = '+key+'>'+provinces[key]+'</option>').appendTo('select[name=province]')
        }
    });
    //选择省份生成相应城市
    // <option value="">请选择</option>
    var province;
    $('select[name=province]').on('change',function () {
        $('select[name=city]').html('<option value = "">请选择</option>'); //清除上次预留
        $('select[name=dealers]').html('<option value = "">请选择</option>');    //清除上次预留
        province = $(this).val();
        var citys = data['0,'+province];
        //console.log(citys); 所有的市 信息，遍历市 json对象，得到市的数字编号 和 市的名称
        for(key in citys) {

            $('<option value = '+key+'>'+ citys[key]+'</option>').appendTo('select[name=city]');
        }
    });
    //选择城市生成经销商
    $('select[name=city]').on('change',function () {
        $('select[name=dealers]').html('<option value = "">请选择</option>');
        city = $(this).val();
        var dealers = data['0,'+province+','+city];
        for (key in dealers) {
            $('<option value = '+key+'>'+ dealers[key]+'</option>').appendTo('select[name=dealers]');
        }
    });

    $('#tijiao').on('click',function () {
        //姓名
        var name = $('#name1').val();
        var nameRule = /^[\u4E00-\u9FA0]+$/;
        var nametru = nameRule.test(name);
        //手机号
        var mobile = $('#mobile1').val();
        var mobileRule = /^(13|18)\d{9}$|^14[57]\d{8}$|^15[0-35-9]\d{8}$|^17[07]\d{8}$/;
        var mobiletru = mobileRule.test(mobile);
        var sheng = $('select[name=province]').val();  //省
        var shi = $('select[name=city]').val(); //市
        var jingxiao = $('select[name=dealers]').val(); //经销商
        if (nametru == "" || mobiletru == "") {
            alert('请填写完整信息');
        } else if ( nametru != true || mobiletru != true ) {
            alert('输入错误，请重新输入');
        } else if (sheng == "" || shi== "" || jingxiao== "") {
            alert('请填写完整信息');
        } else {
            $('#page3').show();  //----------------------------
            $('#page2').hide();
            $('#page1').hide();
        }
    });
    //page3 显示车辆介绍
    $('#referral').on('click',function () {
        $('#page4').show();
        $('#page3').hide();
    });
    //page3 启动K4
    //画布，启动k4
    $('#start1').on('click',function () {
        $('#page5').show();
        $('#page3').hide();
    });
    //page4
    $('#start2').on('click',function () {
        $('#page5').show();
        $('#page4').hide();
    });
    // $('#page4').show();          //------------------------
    $('.choice').each(function (index,val) {  //遍历DOM
        $(val).on('click',function () {
            $('.choice').removeClass('active1');
            $(this).addClass('active1');
            $('.details').hide();
            $('.details').eq(index).show();
        });
    })

    //page5
    var timer = null;
    index = 1;
    var drawImage1 = function () {
        var canvas = $('#canvas').get(0);
        var c = canvas.getContext('2d'); //获取canvas，渲染上下文环境
        var w = canvas.width;
        var h = canvas.height;
        var img = new Image();
        img.onload = function () {
            c.drawImage(img,0,0,w,h);
        }
        img.src = 'imgs/video/che_'+index+'.jpg';
    }
    drawImage1();
    $('#tip').get(0).addEventListener('touchstart',function (ev) {
        ev.preventDefault();
        $('#tip').hide();
        $('#tip_red').show();
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(function () {
            index++;
            if (index<=235) {
                drawImage1(index);
            } else if (index>235) {
                clearInterval(timer);
                $('#page6').show();
            }
        },16)
    },false)
    $('#tip').get(0).addEventListener('touchend',function (ev) {
        ev.preventDefault();
        clearInterval(timer);
        $('#tip').show();
        $('#tip_red').hide();
    },false)
    // $('#page6').show();
    //page6
    var prize = true;
    var posArr = [
        35,18,10,16,31,22,
        6,28,2,30,26,8,
        24,0,14,33,20,4,
        15,36,17,3,29,32,
        19,11,23,7,5,27,
        1,13,34,21,9,25
    ];
    var prizePosArr,ranpos,deg,timer;
    $('#xiazhu').click(function () {
        var qujian = $('#page6 .choujiang').val();
        if (prize) {
            prizePosArr = posArr.splice(qujian,6);
            ranpos = prizePosArr[parseInt(Math.random()*6)];
            deg = 3+ranpos*360/37+1080;
            $('.point1').css({
                'transform':'rotate('+deg+'deg)',
                'transition':'all 6s ease-in-out'
            })
            timer = setTimeout(function () {
                $('#layer3').show();
            },6000)
            $('#close1').click(function () {
                window.location.reload();
            })
        } else {
            posArr.splice(qujian,6);
            ranpos = posArr[parseInt(Math.random()*30)];
            deg = 3+ranpos*360/37+1080;
            $('.point1').css({
                'transform':'rotate('+deg+'deg)',
                'transition':'all 6s ease-in-out'
            })
            timer = setTimeout(function () {
                $('#layer4').show();
            },6000)
            $('#close2').click(function () {
                window.location.reload();
            })
        }
    });
})
