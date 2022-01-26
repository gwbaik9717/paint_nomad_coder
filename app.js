const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll('.jsColor');
const range = document.getElementById('jsRange');

canvas.width = 500;
canvas.height = 500;


ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2;

let painting = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y); 
    }else{
        ctx.lineTo(x, y); 
        ctx.stroke();
    }
}

function handleColorClick(event){
    ctx.strokeStyle = event.target.style.backgroundColor;
}

function handleRangeChange(event){
    ctx.lineWidth = event.target.value;
}


if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    
}

if(range){
    range.addEventListener('input', handleRangeChange);
}


colors.forEach(color => color.addEventListener('click', handleColorClick));

