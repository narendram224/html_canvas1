const canvas  = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width =window.innerWidth;
canvas.height =window.innerHeight;
window.addEventListener('resize',function(){
    canvas.width =window.innerWidth;
    canvas.height =window.innerHeight;
})

const mouse ={
    x:undefined,
    y:undefined
}
canvas.addEventListener('click',function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})
canvas.addEventListener('mousemove',function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})

function drawCircle(){
    ctx.fillStyle ="yellow";
    ctx.strokeStyle ="orchid";
    ctx.lineWidth =5;
    ctx.beginPath();
     ctx.arc(mouse.x,mouse.y,50,0,Math.PI*2);
    ctx.stroke();
}

function animation(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();
    requestAnimationFrame(animation);
}

animation();

