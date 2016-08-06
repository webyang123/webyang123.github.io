function random(min,max,clear) {
    var a = parseInt(Math.random()*(max-min+1)+min);
    if (a == clear) {
        a = parseInt(Math.random()*(max-min+1)+min);
    } else {
        return a;
    }

}
function randomColor() {
    return "rgba("+random(0,255)+","+random(0,255)+","+random(0,255)+","+(Math.random()+0.1)+")";
}
