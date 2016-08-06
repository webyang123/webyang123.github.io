function gonggaochaxun(limit_index){
    $.ajax({
        type: "GET",
        url: "http://localhost/aladdin/php/changeDB.php",
        data: {
            action: "gonggaoqueryAll",
            limits:limit_index,
        },
        dataType: "json",
        success: function (obj) {
            $(".gonggaolistul").empty();
            for(var item in obj) {
                //获取对象
                var line = obj[item];
                var newDiv = $('<li class="clear">'+
                '<a class="fl" href="noticeCon.html?id='+line.urls+'">'+line.titles+'</a>'+
                '<span class="fr">'+line.btime+'</span>'+
                '</li>');
                $(".gonggaolistul").append(newDiv);

            }
        }
    });
}
function dongtaiall(limit_index){
    $.ajax({
        type: "GET",
        url: "http://localhost/aladdin/php/changeDB.php",
        data: {
            action: "queryAll",
            limits:limit_index,

        },
        dataType: "json",
        success: function (obj) {
            $(".zhuynr").empty();
            for(var item in obj) {
                //获取对象
                var line = obj[item];

                var newDiv = $("<div class='newslist clear'>"+
                                "<div class='leftimg fl'>"+
                                    "<img src='"+line.imgs+ "'alt='' />"+
                                "</div>"+
                                "<div class='righttxt fl'>"+
                                    "<h3 class='newtitle' itemid="+ line.id +">"+
                                        "<a href='detail.html?id="+line.id+"'>"+line.title+"</a>"+
                                    "</h3>"+
                                    "<div class=abstract>"+
                                        "<p class=abstractxt>"+line.abstract+"</p>"+
                                        "<span class=fbtime>"+line.datime+"</span>"+
                                        "<p class=xiangq>"+
                                            "<a href=''>阅读详情>></a>"+
                                        "</p>"+
                                    "</div>"+
                                "</div>"+
                            "</div>");
                $(".zhuynr").append(newDiv);
            }
        }
    });
}

function detailcon(ids){
    $.ajax({
        type: "GET",
        url: "http://localhost/aladdin/php/changeDB.php",
        data: {
            action: "detail",
            id:ids,
        },
        dataType: "json",
        success: function (obj) {
            $(".detailbox").empty();
            for(var item in obj) {
                //获取对象
                var line = obj[item];
                var newDiv = $("<h2>"+line.title+"</h2>"+
                "<p class='fabutime'>发布日期："+line.datime+"</p>"+
                "<div class='content'>"+line.content+" </div>");
                $(".detailbox").append(newDiv);
            }
        }
    });
}
function refresh(limit_index) {
    $.ajax({
        type:"GET",
        url:"http://localhost/aladdin/php/changeDB.php",
        data:{
            action:"liuyanqueryAll",
            limits:limit_index,
        },
        dataType:"json",
        success:function(obj){
                 $(".liuyanlist").empty();
                for(var item in obj) {
                    //获取对象
                    var line = obj[item];
                    var newDiv = $('<div class="newslist messagelist clear">'+
                    '<div class="liuyanren clear">'+
                    '<img class="touximg" src="img/'+line.imgname+'" alt="" />'+
                    '<span >'+line.leixing+'：</span>'+
                    '<span>'+line.names+'</span>'+
                    '<span>'+line.timess+'</span>'+
                    '</div>'+
                    '<p>题目：'+line.titless+'</p>'+
                    '<p>内容：'+line.contents+'!</p>'+
                    '<p class="huifu" idindex='+line.id+' >回复：'+line.huifu+'</p>'+
                    '</div>');
                    $(".liuyanlist").append(newDiv);

                }

        }
    })
}
