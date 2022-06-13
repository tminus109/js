const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  let days;
  const month = select.value;
  if (month === "") {
    days = 0;
  } else if (month === "February") {
    days = 28;
  } else if (
    month === "April" ||
    month === "June" ||
    month === "September" ||
    month === "November"
  ) {
    days = 30;
  } else {
    days = 31;
  }
  createCalendar(days, month);
});

function createCalendar(days, month) {
  list.innerHTML = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = i;
    list.appendChild(newLi);
  }
}
