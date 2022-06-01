const button = document.querySelector("button");
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 200; i++) {
    context.beginPath();
    context.fillStyle = "rgba(255,0,0,0.5)";
    context.arc(
      random(canvas.width),
      random(canvas.height),
      random(100),
      0,
      2 * Math.PI
    );
    context.fill();
  }
}

button.addEventListener("click", draw);
