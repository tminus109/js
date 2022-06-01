const select = document.querySelector("select");
const html = document.querySelector("html");

function setTheme(bgColor, color) {
  html.style.backgroundColor = bgColor;
  html.style.color = color;
}

html.style.padding = "20px";

select.addEventListener("change", () => {
  select.value === "black"
    ? setTheme("black", "white")
    : setTheme("white", "black");
});
