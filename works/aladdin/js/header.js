$("body")[0].innerHTML="<div class='nav'><div class='barner'><a href='#'><div class='logo'></div></a>"+
                            "<ul  class='fristnav clear'>"+
                                "<li>"+
                                    "<a href='index.html'>公司首页</a>"+
                                    "<ul class='secondnav' id='menu0'></ul>"+
                                "</li>"+
                                "<li>"+
                                    "<a href='dongtai.html'>公司动态</a>"+
                                    "<ul class='secondnav' id='menu1'>"+
                                        "<ol><a href='dongtai.html'>公司新闻</a></ol>"+
                                        "<ol><a href='gonggao.html'>公司公告</a></ol>"+
                                        "<ol><a href='#'>媒体聚焦</a></ol>"+
                                    "</ul>"+
                                "</li>"+
                                "<li>"+
                                    "<a href='jiegou.html'>组织架构</a>"+
                                    "<ul class='secondnav' id='menu2'></ul>"+
                                "</li>"+
                                "<li>"+
                                    "<a href='invest.html'>投资者关系</a>"+
                                    "<ul class='secondnav' id='menu3'></ul>"+
                                "</li>"+
                                "<li>"+
                                    "<a href='recruit.html'>公司招聘</a>"+
                                    "<ul class='secondnav' id='menu4'></ul>"+
                                "</li>"+
                                "<li>"+
                                    "<a href='about.html'>关于我们</a>"+
                                    "<ul class='secondnav' id='menu5'>"+
                                        "<ol><a href='about.html'>公司简介</a></ol>"+
                                        "<ol><a href='zhici.html'>董事长致辞</a></ol>"+
                                        "<ol><a href='#'>发展历程</a></ol>"+
                                        "<ol><a href='qiyewenhua.html'>企业文化</a></ol>"+
                                    "</ul>"+
                                "</li>"+
                                "<li>"+
                                    "<a href='message.html'>留言</a>"+
                                    "<ul class='secondnav' id='menu6'></ul>"+
                                "</li>"+
                            "</ul>"+
                        "</div>"+
                    "</div>"
$(document).ready(function(){
    $(".fristnav li").on("mouseover",function(){

        $(".secondnav").eq($(this).index()).css("display","block")
    })
    $(".fristnav li").on("mouseout",function(){
        $(".secondnav").eq($(this).index()).css("display","none")
    })
})
