const container = document.querySelector("#container");

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  return `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
}

container.addEventListener("click", (e) => {
  e.target.style.backgroundColor = bgChange();
});
