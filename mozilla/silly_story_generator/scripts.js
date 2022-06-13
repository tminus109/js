const customNameInput = document.getElementById("customName");
const randomizeButton = document.querySelector(".randomize");
const paragraph = document.querySelector(".story");
const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function generateSillyStory() {
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  newStory = newStory
    .replaceAll(":insertx:", xItem)
    .replaceAll(":inserty:", yItem)
    .replaceAll(":insertz:", zItem);
  if (customNameInput.value !== "") {
    newStory = newStory.replaceAll("Bob", customNameInput.value);
  }
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + " stone";
    const temperature = Math.round((94 - 32) * (5 / 9)) + " centigrade";
    newStory = newStory
      .replaceAll("300 pounds", weight)
      .replaceAll("94 fahrenheit", temperature);
  }
  paragraph.textContent = newStory;
  paragraph.style.visibility = "visible";
}

// document.querySelector("html").style.backgroundColor = "red";
randomizeButton.addEventListener("click", generateSillyStory);
