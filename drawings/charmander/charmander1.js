var canvas;
var ctx;
var unit = 20;
window.onload = init;
function init() {

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(5 * unit, 0, 4 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 1 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 2 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 3 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(1 * unit, 4 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(0 * unit, 5 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(1 * unit, 9 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 1 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 2 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(11 * unit, 4 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(12 * unit, 7 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(13 * unit, 9 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(14 * unit, 11 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(15 * unit, 14 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(17 * unit, 11 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(19 * unit, 11 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(18 * unit, 14 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(17 * unit, 16 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(14 * unit, 17 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 16 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(12 * unit, 17 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(10 * unit, 19 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 20 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 19 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 17 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(6 * unit, 17 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 16 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 15 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 11 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(3 * unit, 11 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 10 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 5 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(5 * unit, 6 * unit, 1 * unit, 2 * unit);

    ctx.fillStyle = "rgb(208,56,0)";
    // orange
    ctx.fillRect(5 * unit, 1 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 2 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 4 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(1 * unit, 5 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(1 * unit, 7 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 8 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 9 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 1 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 2 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 4 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(11 * unit, 7 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(12 * unit, 9 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 11 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(8 * unit, 10 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 10 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 4 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 11 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(10 * unit, 13 * unit, 2 * unit, 2 * unit);
    ctx.fillRect(9 * unit, 12 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 7 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 18 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(14 * unit, 16 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(14 * unit, 15 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(17 * unit, 15 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(12 * unit, 14 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(11 * unit, 16 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 17 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 17 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 15 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 16 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 7 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(17 * unit, 6 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(18 * unit, 5 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(19 * unit, 7 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(19 * unit, 4 * unit, 1 * unit, 1 * unit);
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();

    ctx.fillStyle = "rgb(248,128,88)";
    // light orange
    ctx.fillRect(6 * unit, 1 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(5 * unit, 2 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 3 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 19 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 4 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 5 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(1 * unit, 6 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(2 * unit, 7 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 8 * unit, 8 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 4 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 5 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 6 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 7 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(4 * unit, 10 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 9 * unit, 6 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 10 * unit, 4 * unit, 1 * unit);
    ctx.fillRect(18 * unit, 11 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(17 * unit, 10 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(16 * unit, 9 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(19 * unit, 9 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(17 * unit, 14 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(15 * unit, 15 * unit, 2 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 11 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(9 * unit, 11 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 10 * unit, 1 * unit, 3 * unit);
    ctx.fillRect(12 * unit, 10 * unit, 1 * unit, 4 * unit);
    ctx.fillRect(9 * unit, 15 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 16 * unit, 3 * unit, 1 * unit);
    ctx.fillRect(9 * unit, 17 * unit, 1 * unit, 1 * unit);
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    // ctx.fillRect();
    ctx.fillRect(14 * unit, 14 * unit, 1 * unit, 1 * unit);

    // blue
    ctx.fillStyle = "rgb(72,88,144)";
    ctx.fillRect(6 * unit, 7 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 6 * unit, 1 * unit, 1 * unit);

    // light blue
    ctx.fillStyle = "rgb(184,200,240)";
    ctx.fillRect(6 * unit, 16 * unit, 1 * unit, 1 * unit);

    //  DARK YELLOW
    ctx.fillStyle = "rgb(160,104,0)";
    ctx.fillRect(6 * unit, 14 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 15 * unit, 1 * unit, 1 * unit);
    // ctx.fillRect();
    // ctx.fillRect();

    // LIGHT YELLOW
    ctx.fillStyle = "rgb(248,240,0)";
    ctx.fillRect(6 * unit, 12 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(17 * unit, 8 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(18 * unit, 7 * unit, 1 * unit, 3 * unit);
    // ctx.fillRect();
    // ctx.fillRect();


    // YELLOW
    ctx.fillStyle = "rgb(216,176,0)";
    ctx.fillRect(6 * unit, 11 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(6 * unit, 13 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(7 * unit, 14 * unit, 1 * unit, 1 * unit);

    // red
    ctx.fillStyle = "rgb(152,0,0)";
    ctx.fillRect(1 * unit, 8 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(3 * unit, 9 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(10 * unit, 11 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(9 * unit, 13 * unit, 1 * unit, 2 * unit);
    ctx.fillRect(8 * unit, 14 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(13 * unit, 15 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(14 * unit, 14 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(12 * unit, 16 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(11 * unit, 17 * unit, 1 * unit, 1 * unit);
    ctx.fillRect(8 * unit, 18 * unit, 1 * unit, 1 * unit);
    // white
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(5 * unit,5 * unit,1 * unit,1 * unit);
    ctx.fillRect(18 * unit,10 * unit,1 * unit,1 * unit);
    ctx.fillRect(7 * unit,19 * unit,1 * unit,1 * unit);

}