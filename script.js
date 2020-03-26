const canvas = document.querySelector("#canvas");
const context = document.querySelector("#canvas").getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var boxWidth = 75;
var boxHeight = 45;
var color;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for (let y = 0; y <= canvas.width; y += boxWidth) {
    drawTriangle(boxWidth, boxHeight, y);

    for (let x = 0; x <= canvas.height; x += boxHeight) {
      drawSquare(boxWidth, boxHeight, x, y);
    }
  }
});

var getColor = () =>
  "rgb(" +
  Math.floor(Math.random() * 256) +
  ", " +
  Math.floor(Math.random() * 256) +
  ", " +
  Math.floor(Math.random() * 256) +
  ", " +
  1 +
  ")";

 

var drawSquare = (boxWidth, boxHeight, x, y) => {
  context.beginPath();
  context.moveTo(0 + y, boxHeight + x);
  context.lineTo(boxWidth + y, 0 + x);
  context.lineTo(boxWidth + y, boxHeight + x);
  context.lineTo(0 + y, 90 + x);
  context.closePath();
  color = getColor();
  context.fillStyle = color;
  context.fill();

};
var drawTriangle = (boxWidth, boxHeight, y) => {
  context.beginPath();
  context.moveTo(0 + y, 0);
  context.lineTo(boxWidth + y, 0);
  context.lineTo(0 + y, boxHeight);
  context.closePath();
  color = getColor();
  context.fillStyle = color;
  context.fill();
};

for (let y = 0; y <= canvas.width; y += boxWidth) {
  drawTriangle(boxWidth, boxHeight, y);

  for (let x = 0; x <= canvas.height; x += boxHeight) {
    drawSquare(boxWidth, boxHeight, x, y);
  }
}
