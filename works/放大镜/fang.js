$.fn.extend({
    fang:function () {
        //引入样式文件
        $('head').eq(0).append('<link rel="stylesheet" href="fang.css" media="screen" title="no title" charset="utf-8">');
        var minWrap = $('.min-wrap');
        var maxWrap = $('.max-wrap');
        var slider = $('#slider');
        var maxImg = $('.max-wrap img');
        //绑定事件
        minWrap.on('mousemove',function (e) {
            slider.show();
            maxWrap.show();
            //鼠标移入的点位置
            var x = e.clientX - minWrap.offset().left - slider.width()/2;
            var y = e.clientY - minWrap.offset().top - slider.height()/2;
            //临界值判断
            if (x<0) {
                x=0;
            } else if (x>minWrap.width()-slider.width()) {
                x=minWrap.width()-slider.width();
            }
            if (y<0) {
                y=0;
            } else if (y>minWrap.height()-slider.height()) {
                y=minWrap.height()-slider.height();
            }
            //移动slider
            slider.css({
                left:x+'px',
                top:y+'px'
            });
            //修改大图的移动
            var scale = {
                x: x / (minWrap.width()-slider.width()),
                y: y / (minWrap.height()-slider.height())
            };
            // console.log(scale.x,scale.y);
            var maxleft = (maxImg.width()-maxWrap.width()) * scale.x;
            var maxtop = (maxImg.height()-maxWrap.height()) * scale.y;

            // console.log(left,top);
            maxWrap.scrollLeft(maxleft);
            maxWrap.scrollTop(maxtop);

        });
        minWrap.on('mouseout',function () {
            slider.hide();
            maxWrap.hide();
        });
    }







})
