const canvas = document.querySelector('canvas');
const lineWidth = document.getElementById('line-width');
const color = document.getElementById('color');
const fileInput = document.getElementById('file');
const chinButton = document.getElementById('chin_button');
const quokkaButton =
  document.getElementById('quokka_button');
const rabbitButton =
  document.getElementById('rabbit_button');
const bearButton = document.getElementById('bear_button');
const laptop1Button = document.getElementById(
  'laptop1_button'
);
const laptop2Button = document.getElementById(
  'laptop2_button'
);
const fillingWayButton = document.getElementById(
  'filling_way_button'
);

const context = canvas.getContext('2d');

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

let isFilling = false;
let isCharacterOnCanvas = false;
let isLaptopOnCanvas = false;

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

const onCharacterBtnClick = (event) => {
  let parentButton = event.target.parentNode;
  let buttonClass = event.target.className;
  if (isCharacterOnCanvas === false) {
    const image = new Image();
    if (buttonClass === 'chin_button') {
      image.src = '../assets/character/chinchilla.PNG';
    } else if (buttonClass === 'quokka_button') {
      image.src = '../assets/character/quokka.PNG';
    } else if (buttonClass === 'rabbit_button') {
      image.src = '../assets/character/rabbit.PNG';
    } else if (buttonClass === 'bear_button') {
      image.src = '../assets/character/bear.PNG';
    }
    image.onload = function () {
      context.drawImage(
        image,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
      );
    };
    isCharacterOnCanvas = true;
    parentButton.style.border = '#a3cec4 2px solid';
  } else if (isCharacterOnCanvas === true) {
    context.beginPath();
    context.fillStyle = 'white';
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    parentButton.style.border = '#f9d194 1px solid';
    isCharacterOnCanvas = false;
  }
};

const onLaptopBtnClick = (event) => {
  let parentButton = event.target.parentNode;
  let buttonClass = event.target.className;
  if (isLaptopOnCanvas === false) {
    const image = new Image();
    if (buttonClass === 'laptop1_button') {
      image.src = '../assets/laptop/laptop_1.PNG';
    } else if (buttonClass === 'laptop2_button') {
      image.src = '../assets/laptop/laptop_2.PNG';
    }
    image.onload = function () {
      context.drawImage(
        image,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
      );
    };
    isLaptopOnCanvas = true;
    parentButton.style.border = '#a3cec4 2px solid';
  } else if (isLaptopOnCanvas === true) {
    context.beginPath();
    context.fillStyle = 'white';
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    parentButton.style.border = '#f9d194 1px solid';
    isLaptopOnCanvas = false;
  }
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

chinButton.addEventListener('click', onCharacterBtnClick);
quokkaButton.addEventListener('click', onCharacterBtnClick);
rabbitButton.addEventListener('click', onCharacterBtnClick);
bearButton.addEventListener('click', onCharacterBtnClick);

laptop1Button.addEventListener('click', onLaptopBtnClick);
laptop2Button.addEventListener('click', onLaptopBtnClick);

fillingWayButton.addEventListener(
  'click',
  onFillingWayBtnClick
);
