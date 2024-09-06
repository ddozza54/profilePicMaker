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
const saveButton = document.getElementById('save_button');

const context = canvas.getContext('2d');

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

let isFilling = false;
let isCharacterOnCanvas = false;
let classNameOfCharacter = '';
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

const findingImgSrc = (className) => {
  if (className === 'chin_button') {
    return '../assets/character/chinchilla.PNG';
  } else if (className === 'quokka_button') {
    return '../assets/character/quokka.PNG';
  } else if (className === 'rabbit_button') {
    return '../assets/character/rabbit.PNG';
  } else if (className === 'bear_button') {
    return '../assets/character/bear.PNG';
  } else if (className === 'laptop1_button') {
    return '../assets/laptop/laptop_1.PNG';
  } else if (className === 'laptop2_button') {
    return '../assets/laptop/laptop_2.PNG';
  }
};

const onCharacterBtnClick = (event) => {
  console.log(classNameOfCharacter);
  let parentButton = event.target.parentNode;
  let buttonClass = event.target.className;
  if (isCharacterOnCanvas === false) {
    //캐릭터가 캔버스에 없는 경우
    const image = new Image();
    classNameOfCharacter = buttonClass;
    image.src = findingImgSrc(buttonClass);
    context.drawImage(
      image,
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
    isCharacterOnCanvas = true;
    parentButton.style.border = '#a3cec4 2px solid';
  } else if (isCharacterOnCanvas === true) {
    // 캐릭터가 이미 캔버스에 있는 경우
    context.beginPath();
    //클릭한 캐릭터와 캔버스 위에 있는 캐릭터가 같은 경우
    if (classNameOfCharacter === buttonClass) {
      context.fillStyle = 'white';
      context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      parentButton.style.border = '#f9d194 1px solid';
      isCharacterOnCanvas = false;
    } else {
      //그려진 캐릭터와 다른 캐릭터 버튼을 눌렀을 경우

      const image = new Image();
      image.src = findingImgSrc(buttonClass);
      context.drawImage(
        image,
        0,
        0,
        CANVAS_WIDTH,
        CANVAS_HEIGHT
      );
      isCharacterOnCanvas = true;
      parentButton.style.border = '#a3cec4 2px solid';
    }
  }
};

const onLaptopBtnClick = (event) => {
  let parentButton = event.target.parentNode;
  let buttonClass = event.target.className;
  if (isLaptopOnCanvas === false) {
    const image = new Image();
    image.src = findingImgSrc(buttonClass);
    context.drawImage(
      image,
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );
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
  if (isFilling) {
    isFilling = false;
    fillingWayButton.innerText = '🖌️';
  } else {
    isFilling = true;
    fillingWayButton.innerText = '🪣';
  }
};

const onCanvasClick = () => {
  if (isFilling) {
    context.beginPath();
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
};

const onSaveButtonClick = () => {
  const image = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'ProfileByDDOZZA';
  link.click();
  alert('save!');
};

canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
canvas.addEventListener('click', onCanvasClick);

lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);
fileInput.addEventListener('change', onFileChange);
saveButton.addEventListener('click', onSaveButtonClick);

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
