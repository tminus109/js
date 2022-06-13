const btn = document.querySelector("button");
const videoBox = document.querySelector("div");
const video = document.querySelector("video");

function displayVideo() {
  if (videoBox.getAttribute("class") === "hidden") {
    videoBox.setAttribute("class", "showing");
  }
}

btn.addEventListener("click", displayVideo);

videoBox.addEventListener("click", () => {
  videoBox.setAttribute("class", "hidden");
});

video.addEventListener("click", (e) => {
  e.stopPropagation();
  video.play();
});
