async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

function populateHeader(obj) {
  const header = document.querySelector("header");

  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const para = document.createElement("p");
  para.textContent = `Hometown: ${obj["homeTown"]} // Formed: ${obj["formed"]}`;
  header.appendChild(para);
}

function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj["members"];

  for (let i = 0, l = heroes.length; i < l; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    para1.textContent = `Secret identity: ${heroes[i].secretIdentity}`;
    para2.textContent = `Age: ${heroes[i].age}`;
    para3.textContent = "Superpowers:";

    const superPowers = heroes[i].powers;

    for (let j = 0, l2 = superPowers.length; j < l2; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(para1);
    myArticle.appendChild(para2);
    myArticle.appendChild(para3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

populate();
