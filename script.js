const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined
}
canvas.addEventListener('click', function(e) {
    mouse.x = e.x;
    mouse.y= e.y;
    drawCircle();
});

canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
    drawCircle();
})

function drawCircle() {
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}

