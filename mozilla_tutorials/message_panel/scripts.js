function displayMessage(msgText, msgType) {
  const body = document.body;

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  body.appendChild(panel);

  const msg = document.createElement("p");
  msg.setAttribute("style", "white-space: pre;");
  msg.textContent = msgText;
  panel.appendChild(msg);

  if (msgType === "warning") {
    msg.style.backgroundImage = "url(icons/warning.png)";
    panel.style.backgroundColor = "red";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(icons/chat.png)";
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "0";
  }

  panel.addEventListener(
    "mouseover",
    () => (panel.style.backgroundColor = "white")
  );

  panel.addEventListener("mouseout", () => {
    if (msgType === "warning") {
      panel.style.backgroundColor = "red";
    } else if (msgType === "chat") {
      panel.style.backgroundColor = "aqua";
    } else {
      panel.style.backgroundColor = "#eee";
    }
  });

  panel.addEventListener("click", () => panel.parentNode.removeChild(panel));

  /*     const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    panel.appendChild(closeBtn);
    closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel)); */
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  displayMessage("Hi Danni, how are you today?", "chat");
});
