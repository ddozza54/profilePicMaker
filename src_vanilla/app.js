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

let isPainting = false;
let isFilling = false;

let fixedItemArray = [];
let backgroundColor = '';
const profileItems = {
  character: 'character_quokka_button',
  desk: 'desk3_button',
  laptop: 'laptop1_button',
};

const findingImgSrc = (className) => {
  if (className === 'character_chin_button') {
    return '../assets/character/chinchilla.PNG';
  } else if (className === 'character_quokka_button') {
    return '../assets/character/quokka.PNG';
  } else if (className === 'character_rabbit_button') {
    return '../assets/character/rabbit.PNG';
  } else if (className === 'character_bear_button') {
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

const drawImage = (targetClassName) => {
  const image = new Image();
  image.src = findingImgSrc(targetClassName);
  context.drawImage(
    image,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
};

const drawOrderedItems = () => {
  Object.values(profileItems).map((item) =>
    drawImage(item)
  );
};

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
  const pickColor = event.target.value;
  context.strokeStyle = pickColor;
  context.fillStyle = pickColor;
  backgroundColor = pickColor;
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

const changeProfileItems = (event) => {
  let buttonClass = event.target.className;
  if (buttonClass.includes('character')) {
    profileItems['character'] = buttonClass;
  }
  if (buttonClass.includes('desk')) {
    profileItems['desk'] = buttonClass;
  }
  if (buttonClass.includes('laptop')) {
    profileItems['laptop'] = buttonClass;
  }
  context.beginPath();
  context.fillStyle = backgroundColor || 'white';
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  drawOrderedItems();
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
    drawOrderedItems();
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

chinButton.addEventListener('click', changeProfileItems);
quokkaButton.addEventListener('click', changeProfileItems);
rabbitButton.addEventListener('click', changeProfileItems);
bearButton.addEventListener('click', changeProfileItems);

desk1Button.addEventListener('click', changeProfileItems);
desk2Button.addEventListener('click', changeProfileItems);
desk3Button.addEventListener('click', changeProfileItems);

laptop1Button.addEventListener('click', changeProfileItems);
laptop2Button.addEventListener('click', changeProfileItems);

fillingWayButton.addEventListener(
  'click',
  onFillingWayBtnClick
);

window.onload = drawOrderedItems;
