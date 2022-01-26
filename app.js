const canvas = document.querySelector('#jsCanvas');
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll('.jsColor');
const range = document.getElementById('jsRange');
const mode = document.querySelector('#jsMode');
const INITIAL_COLOR = "#2c2c2c";

canvas.width = 500;
canvas.height = 500;


ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2;

let painting = false;
let filling = false;

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
    ctx.fillStyle = event.target.style.backgroundColor;
}

function handleRangeChange(event){
    ctx.lineWidth = event.target.value;
}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = 'Fill';

    }else{
        filling = true; 
        mode.innerText = 'Paint';
    }
}

function handleCanvasClick(){
    if(filling === true){
        ctx.fillRect(0, 0, 500, 500);
    }
    
}


if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
    
}

if(range){
    range.addEventListener('input', handleRangeChange);
}

if(mode){
    mode.addEventListener('click', handleModeClick);
}



colors.forEach(color => color.addEventListener('click', handleColorClick));

