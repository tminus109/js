const admitted = document.getElementById("admitted");
const refused = document.getElementById("refused");
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

function sortPeople() {
  for (let i = 0, l = people.length; i < l; i++) {
    if (people[i] === "Phil" || people[i] === "Lola") {
      refused.textContent += people[i] + ", ";
    } else {
      admitted.textContent += people[i] + ", ";
    }
  }
  refused.textContent = refused.textContent.slice(0, -2);
  admitted.textContent = admitted.textContent.slice(0, -2);
}

refused.textContent += "Admit: ";
admitted.textContent += "Refuse: ";
sortPeople();
