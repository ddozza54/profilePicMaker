const canvas = document.querySelector('canvas');
const lineWidth = document.getElementById('line-width');
const color = document.getElementById('color');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;
context.lineWidth = lineWidth.value;

let isPainting = false;

const onMouseMove = (event) => {
  if (isPainting) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
  }
  context.moveTo(event.offsetX, event.offsetY);
};

const startPainting = () => {
  isPainting = true;
};

const cancelPainting = () => {
  isPainting = false;
};

const onLineWidthChange = (event) => {
  context.beginPath();
  context.lineWidth = event.target.value;
};

const onColorChange = (event) => {
  context.beginPath();
  context.strokeStyle = event.target.value;
  context.fillStyle = event.target.value;
};

canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);
