const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  let days = 0;
  const month = select.value;
  if (
    month === "April" ||
    month === "June" ||
    month === "September" ||
    month === "November"
  ) {
    days = 30;
  } else if (
    month === "January" ||
    month === "March" ||
    month === "May" ||
    month === "July" ||
    month === "August" ||
    month === "October" ||
    month === "December"
  ) {
    days = 31;
  } else if (month === "February") {
    days = 28;
  } else {
    days = 0;
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
