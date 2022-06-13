const output = document.querySelector(".output");

/* function countdown() {
  for (let i = 10; i >= 0; i--) {
    const newParagraph = document.createElement("p");
    if (i === 10) {
      newParagraph.textContent = `Countdown ${i}`;
    } else if (i === 0) {
      newParagraph.textContent = "Blast off!";
    } else {
      newParagraph.textContent = i;
    }
    output.appendChild(newParagraph);
  }
} */

/* function countdown() {
  let i = 10;
  while (i >= 0) {
    const newParagraph = document.createElement("p");
    if (i === 10) {
      newParagraph.textContent = `Countdown ${i}`;
    } else if (i === 0) {
      newParagraph.textContent = "Blast off!";
    } else {
      newParagraph.textContent = i;
    }
    output.appendChild(newParagraph);
    i--;
  }
} */

function countdown() {
  let i = 10;
  const interval = setInterval(() => {
    const newParagraph = document.createElement("p");
    if (i === 0) {
      newParagraph.textContent = "Blast off!";
      clearInterval(interval);
    } else if (i === 10) {
      newParagraph.textContent = `Countdown ${i}`;
    } else {
      newParagraph.textContent = i;
    }
    output.appendChild(newParagraph);
    i--;
  }, 500);
}

countdown();
