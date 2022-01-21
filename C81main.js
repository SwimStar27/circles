canvas=document.getElementById("canvaz");
ctx=canvas.getContext("2d");
color="white";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,30,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",md);
function md(e){
    mouse_X=e.clientX-canvas.offsetLeft;
    mouse_Y=e.clientY-canvas.offsetTop;
    circle(mouse_X,mouse_Y);
}
function circle(mouse_X,mouse_Y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_X,mouse_Y,30,0,2*Math.PI);
ctx.stroke();
}
