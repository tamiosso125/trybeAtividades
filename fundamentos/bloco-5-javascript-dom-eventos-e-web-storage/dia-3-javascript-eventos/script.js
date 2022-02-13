function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function addDays() {
  const idDays = document.querySelector("#days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let createLi = document.createElement("li");

    if (day == 24 || day == 25 || day == 31) {
      createLi.classList = "day holiday";
      idDays.appendChild(createLi);
      createLi.innerText = day;
      idDays.appendChild(createLi);
    }

    else if (day == 4 || day == 11 || day == 18) {
      createLi.classList = "day friday";
      createLi.innerText = day;
      idDays.appendChild(createLi);
     
    }

    else if (day == 25) {
      createLi.classList = "day holiday friday";
      createLi.innerText = day;
      idDays.appendChild(createLi);
    }
    else{
      createLi.innerText = day;
      createLi.classList = "day";
      idDays.appendChild(createLi);
    }
 
  }
}
addDays();
