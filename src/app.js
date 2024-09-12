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
const desk1Button = document.getElementById('desk1_button');
const desk2Button = document.getElementById('desk2_button');
const desk3Button = document.getElementById('desk3_button');
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
const saveNotification = document.getElementById(
  'save_notification_container'
);

const context = canvas.getContext('2d');

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
context.lineWidth = lineWidth.value;

const fixedItemArray = [];

let isPainting = false;
let isFilling = false;
let isCharacterOnCanvas = false;

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
  } else if (className === 'desk1_button') {
    return '../assets/desk/desk_1.PNG';
  } else if (className === 'desk2_button') {
    return '../assets/desk/desk_2.PNG';
  } else if (className === 'desk3_button') {
    return '../assets/desk/desk_3.PNG';
  }
};

const drawImage = (buttonClass) => {
  const image = new Image();
  image.src = findingImgSrc(buttonClass);
  context.drawImage(
    image,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
};

// 같은 카테고리 내에 있는 것들만 서로 대치 되도록, 카테고리가 다르면 대치 되지 않도록
const onCharacterBtnClick = (event) => {
  let buttonClass = event.target.className;
  //캐릭터가 캔버스에 없는 경우 -> 추후 기본 이미지가 세팅된 버전으로 변경
  if (!isCharacterOnCanvas) {
    drawImage(buttonClass);
    isCharacterOnCanvas = true;
  } else if (isCharacterOnCanvas) {
    // 캐릭터가 이미 캔버스에 있는 경우 - 초기화 후 그려주기
    context.beginPath();
    context.fillStyle = 'white';
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    console.log(fixedItemArray);
    drawImage(buttonClass);
    fixedItemArray.map((item) => drawImage(item));
    isCharacterOnCanvas = true;
  }
};

const fixedItemButtonClick = (event) => {
  let buttonClass = event.target.className;
  fixedItemArray.push(buttonClass);
  context.beginPath();
  drawImage(buttonClass);
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
    isCharacterOnCanvas = false;
  }
};

const onSaveButtonClick = () => {
  const image = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'ProfileByDDOZZA';
  link.click();
  saveNotification.classList.add('show');
  setTimeout(() => {
    saveNotification.classList.remove('show');
  }, 2000);
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

desk1Button.addEventListener('click', fixedItemButtonClick);
desk2Button.addEventListener('click', fixedItemButtonClick);
desk3Button.addEventListener('click', fixedItemButtonClick);

laptop1Button.addEventListener(
  'click',
  fixedItemButtonClick
);
laptop2Button.addEventListener(
  'click',
  fixedItemButtonClick
);

fillingWayButton.addEventListener(
  'click',
  onFillingWayBtnClick
);
