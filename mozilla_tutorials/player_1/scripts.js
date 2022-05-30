const p = document.querySelector("p");

/* function updateName() {
  const name = prompt("Enter a new name");
  p.textContent = "Player 1: " + name;
}

p.addEventListener("click", updateName); */

p.onclick = function updateName() {
  const name = prompt("Enter a new name");
  p.textContent = "Player 1: " + name;
};
