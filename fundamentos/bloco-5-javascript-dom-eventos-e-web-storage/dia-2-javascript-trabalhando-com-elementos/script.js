let createH1 = document.createElement("h1");
createH1.innerText = "Mario";
createH1.className = "title";
document.body.appendChild(createH1);

let createMain = document.createElement("main");
createMain.className = "main-content";
document.body.appendChild(createMain);

let createSection = document.createElement("section");
createSection.className = "center-content";
createMain.appendChild(createSection);

let createP = document.createElement("p");
createP.innerText = "bla bla bla";
createSection.appendChild(createP);

let createSectionLeft = document.createElement("section");
createSectionLeft.className = "left-content";
createMain.appendChild(createSectionLeft);

let createSectionRight = document.createElement("section");
createSectionRight.className = "right-content";
createMain.appendChild(createSectionRight);

let image = document.createElement("img");
image.className = "small-image";
image.src = "https://picsum.photos/200";
createSectionLeft.appendChild(image);

let numerosPorExtenso = [
  "um",
  "dois",
  "tres",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];

let listUl = document.createElement("ul");
createSectionRight.appendChild(listUl);

for (let key in numerosPorExtenso) {
  let numero = numerosPorExtenso[key];

  let createList = document.createElement("li");

  createList.innerText = numero;

  listUl.appendChild(createList);
}

for (let i = 0; i < 3; i += 1) {
  let createH3 = document.createElement("h3");
  createH3.className = "description";
  createMain.appendChild(createH3);
}

let sectionLeft = document.getElementsByClassName("left-content")[0];
createMain.removeChild(sectionLeft);

let sectionRight = document.getElementsByClassName("right-content")[0];
sectionRight.style.marginRight = "auto";
sectionRight.style.backgroundColor = "blue";

let sectionCenter = document.getElementsByClassName("center-content")[0];

sectionCenter.parentNode.style.backgroundColor = "green";
