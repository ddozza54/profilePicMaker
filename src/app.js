const canvas = document.querySelector('canvas');
const lineWidth = document.getElementById('line-width');
const color = document.getElementById('color');
const fileInput = document.getElementById('file');
const chinButton = document.getElementById('chin_button');
const gramButton = document.getElementById('gram_button');
const fillingWayButton = document.getElementById(
  'filling_way_button'
);

const context = canvas.getContext('2d');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

let isFilling = false;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
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

const onFileChange = (event) => {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    context.drawImage(
      image,
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
    fileInput.value = null;
  };
};

const onChinBtnClick = () => {
  const image = new Image();
  image.src = '../assets/character/chin.PNG';
  image.onload = function () {
    context.drawImage(
      image,
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
  };
};

const onLaptopBtnClick = () => {
  const image = new Image();
  image.src = '../assets/laptop/gram.PNG';
  image.onload = function () {
    context.drawImage(
      image,
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
  };
};

const onFillingWayBtnClick = () => {
  console.log('클릭');
  if (isFilling) {
    isFilling = false;
    fillingWayButton.innerText = '🖌️';
    console.log(isFilling);
  } else {
    isFilling = true;
    fillingWayButton.innerText = '🪣';
    console.log(isFilling);
  }
};

const onCanvasClick = () => {
  context.beginPath();
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('click', onCanvasClick);
lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);
fileInput.addEventListener('change', onFileChange);

chinButton.addEventListener('click', onChinBtnClick);
gramButton.addEventListener('click', onLaptopBtnClick);
fillingWayButton.addEventListener(
  'click',
  onFillingWayBtnClick
);
