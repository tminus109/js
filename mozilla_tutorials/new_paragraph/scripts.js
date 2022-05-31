// document.addEventListener("DOMContentLoaded", () => {});

function createParagraph() {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "You clicked the button.";
  document.body.appendChild(newParagraph);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
