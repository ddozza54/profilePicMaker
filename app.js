const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;
context.lineWidth = 2;

let isPainting = false;

const onMouseMove = (event) => {
  console.log(event.offsetX, event.offsetY);
  if (isPainting) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
  }
  context.moveTo(event.offsetX, event.offsetY);
};

const startPainting = (event) => {
  console.log('눌렀다!', event.offsetX, event.offsetY);
  isPainting = true;
};

const cancelPainting = () => {
  isPainting = false;
};

canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);

/** 마우스가 누른 채 그림 그려지는 것 만들어보기
 *  1. 마우스가 클릭되는 이벤트를 받는다
 * 2. 마우스가 클릭되는 이벤트가 감지되면 -> line Begine(), moveTo() 로 시작점을 해당 위치에 준다
 * => moveTo 로 먼저 붓을 마우스가 현재 있는 곳에 위치시켜준다.
 * 3. 마우스가 움직이면 -> LineTo() 로 움직인 곳 까지 stoke 를 준다.
 *
 */
