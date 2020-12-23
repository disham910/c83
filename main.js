var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var width=screen.width;
newidth=width-70;
newheight=screen.height-300;
if(width<992){
    document.getElementById("myCanvas").width=newidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";    
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    lastx=e.touches[0].clientX-canvas.offsetLeft;
    lasty=e.touches[0].clientY-canvas.offsetTop;  
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
 currentx=e.touches[0].clientX-canvas.offsetLeft;
    currenty=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=2;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
    lastx=currentx;
    lasty=currenty;
    
}