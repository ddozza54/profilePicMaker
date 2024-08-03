const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

context.fillStyle = 'green';

context.fillRect(10, 10, 150, 200);

const colors = [
  '#D6A2E8',
  '#F8EFBA',
  '#FEA47F',
  '#BDC581',
  '#ffeaa7',
  '#a29bfe',
  '#e17055',
];

const onMouseMove = (event) => {
  console.log(event.offsetX, event.offsetY);
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(event.offsetX, event.offsetY);
  let randomcolor =
    colors[Math.ceil(Math.random() * colors.length)];
  context.strokeStyle = randomcolor;
  context.stroke();
};

canvas.addEventListener('mousemove', onMouseMove);

// 클릭하면 라인이 그려지는 캔버스 만들기
// 1. 클릭한 이벤트를 이벤트 리스너를 통해 감지
// 2. 클릭한 곳의 좌표를 구한다.
// 2-1. 캔버스 내에서의 좌표를 추적하는 법? 캔버스의 위치를 변수로 만든 후 전체 화면에서 빼기?
//=> 이벤트 리스너를 console.log 해 어떤 정보가 들어있는지 확인해볼 수 있다.
// 우리는 캔버스와 관련된 데이터를 찾으면 됨. offsetX, offsetY

// 3. 클릭시, beginPath() 함수로 기존의 라인을 끊어냄,
// 4. 시작점은 설정하지 않거나 => 그럼 라인이 안그려짐. , moveTo를 (0,0) 으로 고정
// 5. lineTo()로 받아온 위치를 넣어줌.
// 6. context.stoke() 로 선을 만들어줌.

//7. 클릭하면 그려지게 하는 것 대신, 마우스를 움직이면 알아서 그려지게 하려면, mouseMove 를 이벤트로 사용한다.
