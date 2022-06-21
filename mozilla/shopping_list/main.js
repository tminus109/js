const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const list = document.querySelector("ul");

input.focus();

addBtn.addEventListener("click", () => {
  const newItem = input.value;
  const newLi = document.createElement("li");
  newLi.textContent = newItem;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    newLi.remove();
  });
  newLi.appendChild(deleteBtn);
  list.appendChild(newLi);
  input.value = "";
  input.focus();
});
