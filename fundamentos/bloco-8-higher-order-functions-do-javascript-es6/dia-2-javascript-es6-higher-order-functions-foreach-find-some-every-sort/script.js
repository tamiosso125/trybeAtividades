const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 30

// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 30

// function authorBornIn1947() {
//   // escreva aqui o seu código
//   return books.find((elements) => elements.author.birthYear === 1947).author.name;

// }
// console.log(authorBornIn1947());

// function smallerName() {
//   let nameBook;
//   // escreva aqui o seu código
//   books.forEach((elements) => {
//     if (!nameBook|| elements.name.length < nameBook.length) {
//       nameBook = elements.name;
//     }
//   });
//   // Variável nameBook que receberá o valor do menor nome;

//   return nameBook;
// }

// console.log(smallerName());

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: "George R. R. Martin",
//   },
//   genre: "Fantasia",
//   id: 1,
//   name: "As Crônicas de Gelo e Fogo",
//   releaseYear: 1991,
// };

// function getNamedBook() {
//   // escreva seu código aqui

//   return books.find((elements) => elements.name.length === 26).author.name;
// }

// console.log(getNamedBook());

// function booksOrderedByReleaseYearDesc() {
//   // escreva aqui seu código
//   return books.sort((a, b) => b.releaseYear - a.releaseYear);
// }

// console.log(booksOrderedByReleaseYearDesc());

// function everyoneWasBornOnSecXX() {
//   // escreva seu código aqui
//   return books.every((elements) => elements.author.birthYear >= 2000);
// }

// console.log(everyoneWasBornOnSecXX());

// function someBookWasReleaseOnThe80s() {
//   // escreva seu código aqui
//   return books.some((elements) => elements.releaseYear >= 1980 && elements.releaseYear <= 1989)
// }

// console.log(someBookWasReleaseOnThe80s());

function authorUnique() {
  // escreva seu código aqui
  return books.every((elements) => 
      !books.some((elements2) =>
        (elements.author.birthYear === elements2.author.birthYear) &&
        (elements.author.name !== elements2.author.name)
    )
  );
}

console.log(authorUnique());

