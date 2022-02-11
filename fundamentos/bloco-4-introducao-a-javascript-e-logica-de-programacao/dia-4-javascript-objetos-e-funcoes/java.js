// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
//   recorrente: "Sim",
// };

// let info2 = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: "O último MacPatinhas",
//   recorrente: "Sim",
// };

// // console.log("Bem Vinda, " + info.personagem);

// // console.log(info.recorrente);

// // for(let index in info){
// //   console.log(index);
// // }
// // for(let index in info){
// //   console.log(info[index]);
// // }

// for( let index in info){

//   if( info[index] === "Sim" && info2[index] === "Sim" && index === "recorrente"){
//   console.log("Ambos Recorrentes");

//   }
//   else{
//     console.log(info[index] + ' e ' + info2[index]);
//   }
// }

// "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);

// function checkPalindrome(string) {
//   let reverseWord = string.split('').reverse().join('');
//   console.log(reverseWord);
//   if (reverseWord === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkPalindrome('arara')); //true
// console.log(checkPalindrome('desenvolvimento')); //false

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

// function arrayInt(array) {
//   let indexArray = 0;
//   for (let key in array) {
//     if(array[indexArray] < array[key]){
//       indexArray = key

//       // return array[key];
//     }else if(indexArray > array[key]){

//       return indexArray;
//     }
//   }
// }

// console.log(arrayInt([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

// function arrayInt(array) {
//   let indexArray = 0;
//   for (let key in array) {
//     if(array[indexArray] > array[key]){
//       indexArray = key

//     }
//   }
//   return indexArray;
// }

// console.log(arrayInt([2, 4, 6, 7, 10, 0, -3]));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

// function arrayBigWord(array) {
//     // let indexArray = 0;
//     let string = "";
//     for (let key in array) {
//     if(string.length < array[key].length){
//       string = array[key];
//     }
//     }
//     return string;
//   }

//   console.log(arrayBigWord(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

// function repeatNumber(array){
//   let indexArray = 0;
//   for(let key in array){
//     if(array[indexArray] === array[key]){
//       indexArray = array[key];
//     }

//   }
// return indexArray;
// }

// console.log(repeatNumber([2, 3, 2, 5, 8, 2, 3]))

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

// function receiveNaturalNumberPlus(number) {
//   let numberPlus = 0;

//   if (number < 0) {
//     return "Numero invalido";
   
//   } else  if (number > 0) {
//     for (let i = 0; i <= number; i += 1) {
//       numberPlus = numberPlus + i;
//     }
//   }
//   return numberPlus;
// }

// console.log(receiveNaturalNumberPlus(10));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

// function verificaFimPalavra(word, ending){

// }

function verificaFimPalavra(word, ending) {
  word = word.split(''); //pegar cada letra separadamente
  ending = ending.split('');
  controle = true;
  for (let index = 0; index < ending.length; index += 1) {
    if (word[word.length - ending.length + index] != ending[index]) {
      controle = false;
    }
  }
  console.log(word);
  console.log(ending);

  return controle;
}


console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false