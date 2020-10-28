document.addEventListener("DOMContentLoaded", function(){
    let canvas = document.getElementById('mycanvas');
    mycanvas.height = 500;
    mycanvas.width = 500;
    ctx = mycanvas.getContext('2d');
    ctx.fillStyle = "red";
    ctx.fillRect(0,0,500,500);

    ctx.beginPath();
    ctx.arc(50, 50, 25, 0, 2*Math.PI, true);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle ="blue";
    ctx.fill();
});
