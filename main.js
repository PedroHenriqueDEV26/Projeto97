var canvas= document.getElementById("myCanvas") 
var ctx= canvas.getContext("2d")
var mouseEvent="empty"

var lastPositionX, lastPositionY;
var color="black"
var widthLine=4

var width= screen.width;
var height= screen.height;
var newWidth= screen.width - 70;
var newHeight= screen.height - 300;

if(width<992){
    document.getElementById("myCanvas").width= newWidth;
    document.getElementById("myCanvas").height= newHeight;
    document.body.style.overflow="hidden"
}

canvas.addEventListener("mousedown", myMousedown)
function myMousedown(e){
    color=document.getElementById("cor1").value
    mouseEvent="mousedown"
}
canvas.addEventListener("touchstart", myTouchStart)
function myTouchStart(e){
    color=document.getElementById("cor1").value
    lastPositionofX=e.touches[0].clientX-canvas.offsetLeft;
    lastPositionofY=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("mouseup", myMouseup)
function myMouseup(e){
    mouseEvent="mouseup"
}

canvas.addEventListener("mouseleave", myMouseleave)
function myMouseleave(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mousemove", myMousemove)
function myMousemove(e){
    posMouseX=e.clientX-canvas.offsetLeft;
    posMouseY=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){

        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=widthLine;
        ctx.moveTo(posMouseX, posMouseY);
        ctx.lineTo(lastPositionX, lastPositionY);
        ctx.stroke();
    }
    lastPositionX=posMouseX;
    lastPositionY=posMouseY;
}


canvas.addEventListener("touchmove", myTouchMove)
function myTouchMove(e){
    currentPositionOfTouchX=e.touches[0].clientX-canvas.offsetLeft
    currentPositionOfTouchY=e.touches[0].clientY-canvas.offsetTop


    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth=widthLine;
    ctx.moveTo(lastPositionofX, lastPositionofY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionofX = currentPositionOfTouchX;
    lastPositionofY = currentPositionOfTouchY;
}




