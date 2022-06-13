const displayedImg = document.querySelector(".displayed-img");
const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".dark");
const thumbBar = document.querySelector(".thumb-bar");
const images = ["pic1.jpg", `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

for (let i = 0, l = images.length; i < l; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${images[i]}`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", (e) => (displayedImg.src = e.target.src));
}

btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    btn.textContent = "Lighten";
    btn.setAttribute("class", "light");
  } else {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    btn.textContent = "Darken";
    btn.setAttribute("class", "dark");
  }
});
