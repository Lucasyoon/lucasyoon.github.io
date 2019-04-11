function drawGroundBlocks(numBlock,x,y) {
    for (i = 0; i<numBlock; i++) {
        ctx.save();
        ctx.translate(i*17*unit + x * unit,y * unit);
        drawGroundBlock();
        ctx.restore();
    }

}
function drawGroundBlock() {
    ctx.fillStyle = "#769DD5"; // Dark blue
    ctx.fillRect(0*unit,0*unit,17*unit,17*unit);
    ctx.fillStyle = "#92BBE7"; // blue
    ctx.fillRect(4*unit,4*unit,1*unit,1*unit)
    ctx.fillRect(8*unit,2*unit,1*unit,1*unit)
    ctx.fillRect(6*unit,7*unit,1*unit,1*unit)
    ctx.fillRect(2*unit,8*unit,1*unit,1*unit)
    ctx.fillRect(3*unit,9*unit,1*unit,1*unit)
    ctx.fillRect(10*unit,7*unit,1*unit,1*unit)
    ctx.fillRect(15*unit,5*unit,1*unit,1*unit)
    ctx.fillRect(9*unit,11*unit,1*unit,1*unit)
    ctx.fillRect(15*unit,15*unit,1*unit,1*unit)
    ctx.fillRect(14*unit,14*unit,1*unit,1*unit)
    ctx.fillRect(14*unit,9*unit,1*unit,1*unit)
    ctx.fillRect(9*unit,14*unit,1*unit,1*unit)
    ctx.fillRect(5*unit,15*unit,1*unit,1*unit)
    ctx.fillStyle = "#C3E4FE";  // Light blue
    ctx.fillRect(1*unit,1*unit,1*unit,1*unit)
    ctx.fillRect(2*unit,2*unit,1*unit,1*unit)
    ctx.fillRect(3*unit,3*unit,1*unit,1*unit)
    ctx.fillRect(5*unit,6*unit,1*unit,1*unit)
    ctx.fillRect(1*unit,7*unit,1*unit,1*unit)
    ctx.fillRect(7*unit,1*unit,1*unit,1*unit)
    ctx.fillRect(9*unit,6*unit,1*unit,1*unit)
    ctx.fillRect(13*unit,8*unit,1*unit,1*unit)
    ctx.fillRect(14*unit,4*unit,1*unit,1*unit)
    ctx.fillRect(4*unit,14*unit,1*unit,1*unit)
    ctx.fillRect(8*unit,10*unit,1*unit,1*unit)
    ctx.fillRect(7*unit,9*unit,1*unit,1*unit)
    ctx.fillRect(8*unit,13*unit,1*unit,1*unit)
    ctx.fillRect(14*unit,14*unit,1*unit,1*unit)
    ctx.fillRect(13*unit,13*unit,1*unit,1*unit)
    // ctx.fillRect(*unit,*unit,*unit,*unit)
    // ctx.fillRect(*unit,*unit,*unit,*unit)
    // ctx.fillRect(*unit,*unit,*unit,*unit)
    // ctx.fillRect(*unit,*unit,*unit,*unit)
    
}
