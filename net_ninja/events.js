/* var title = document.getElementById("titileId");

title.onclick = function () {
  alert("on click");
};

title.onmouseover = function () {
  alert("on hover");
}; */

/* function setUpEvents() {
  var content = document.getElementById("content");
  var button = document.getElementById("show_more");

  button.onclick = function () {
    if (content.className === "open") {
      content.className = "";
      button.innerHTML = "show more";
    } else {
      content.className = "open";
      button.innerHTML = "show less";
    }
  };
}

window.onload = function () {
  setUpEvents();
}; */

/* var message = document.getElementById("message");

function showMessage() {
  message.className = "show";
}

setTimeout(showMessage, 1000); */

/* var colorChanger = document.getElementById("color_changer");
var colors = ["red", "blue", "green", "pink"];
var counter = 0;

function changeColor() {
  colorChanger.style.background = colors[counter];
  if (counter < colors.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
}

var myInterval = setInterval(changeColor, 1000);

colorChanger.onclick = function () {
  clearInterval(myInterval);
  colorChanger.textContent = "Interval stopped.";
}; */

/* var myForm = document.forms.myForm;

myForm.name.value;
myForm.colour.value;

myForm.name.onfocus = function () {
  myForm.name.style.border = "4px solid pink";
};

myForm.name.onblur = function () {
  myForm.name.style.border = "none";
}; */

/* var myForm = document.forms.myForm;
var message = document.getElementById("message2");

myForm.onsubmit = function () {
  if (myForm.name.value === "") {
    message.innerHTML = "Name is empty.";
    return false;
  } else {
    message.innerHTML = "";
    return true;
  }
}; */

var myP = document.getElementById("c").getElementsByTagName("p")[5];
var myP2 = $("#c p:last-child");

myP2.addClass("test");
myP2.removeClass("test");
myP2.fadeOut();
myP2.fadeIn();
myP2.css({ color: "red" });
