const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);

// black background

// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.fillRect(50, 50, 100, 150);

// filled rectangles

// ctx.fillStyle = "rgb(0, 255, 0)";
// ctx.fillRect(75, 75, 100, 100);

// ctx.fillStyle = "rgba(255, 0, 255, 0.75)";
// ctx.fillRect(25, 100, 175, 50);

// outlined rectangle

// ctx.strokeStyle = "rgb(255, 255, 255)";
// ctx.strokeRect(25, 25, 175, 200);
// ctx.lineWidth = 5;

// line

// ctx.strokeStyle = "rgb(255, 255, 255)";
// ctx.lineWidth = 10;
// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(300, 300);
// ctx.stroke();

// triangle

// function degToRad(degrees) {
//   return (degrees * Math.PI) / 180;
// }

// const triHeight = 50 * Math.tan(degToRad(60));

// ctx.fillStyle = "rgb(255,0,0)";
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 50 + triHeight);
// ctx.lineTo(50, 50);
// ctx.fill();

// circle

// function degToRad(degrees) {
//   return (degrees * Math.PI) / 180;
// }

// ctx.fillStyle = "rgb(0,0,255)";
// ctx.beginPath();
// ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
// ctx.fill();

// ctx.fillStyle = "yellow";
// ctx.beginPath();
// ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
// ctx.lineTo(200, 106);
// ctx.fill();

// text

// ctx.strokeStyle = "white";
// ctx.lineWidth = 1;
// ctx.font = "36px arial";
// ctx.strokeText("Canvas Text", 50, 50);

// ctx.fillStyle = "rgb(255, 0, 0)";
// ctx.font = "48px georgia";
// ctx.fillText("Canvas Text 2", 50, 150);
