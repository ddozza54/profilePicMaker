const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

context.fillStyle = 'green';
context.rect(200, 200, 100, 100);
// context.fill();
context.fillRect(10, 10, 150, 200);
context.stroke();

context.beginPath();
context.rect(300, 300, 200, 200);
context.fillStyle = 'red';
context.fill();

context.beginPath();
context.moveTo(400, 400);
context.lineTo(400, 600);
context.lineTo(600, 600);
context.lineTo(600, 400);
context.lineTo(400, 400);
context.fillStyle = 'blue';
context.fill();
