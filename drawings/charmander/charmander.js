var canvas;
var ctx;
var unit=20;
window.onload = init;
function init() {

    canvas= document.getElementById("myCanvas");
    ctx= canvas.getContext("2d");
    ctx.fillStyle="black";
    ctx.fillRect(5*unit,0,4*unit,1*unit);
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
}

