// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// const a = 2;
// const b = 1;

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

// console.log(adicao);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const a = 2;
// const b = 7;

// if(a > b){
//   console.log(a);
// }
// else{
//   console.log(b);
// }

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const array = [5, 2, 1, 20];
// let caixa = 0;
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] > caixa) {
//     caixa = array[i];
//   }
// }
// console.log(caixa);

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sign me ajudou a resolver o problema
// const a = 0;

// if(Math.sign(a) == 1){
// console.log("positive");
// }
// else if(Math. sign(a) == -1){
//   console.log("negative");
// }
// else{
//   console.log("zero");
// }

// const a = 45;
// const b = -43;
// const c = 90;

// somaABC = a + b + c;

// if (a > 0 && b > 0 && c > 0) {
//   if (somaABC === 180) {
//     console.log("true");
//   }
//   if (somaABC != 180) {
//     console.log("false");
//   }
// } else if (a < 0 || b < 0 || c < 0) {
//   console.log("Error");
// }

// const peca = "rainha";

// switch (peca.toLowerCase()) {
//   case "cavalo":
//     console.log("Anda em L");
//     break;
//   case "rei":
//     console.log("Uma casa para qualquer direcao");
//     break;
//   case "rainha":
//     console.log("Todas as direcoes");
//     break;
//   case "bispo":
//     console.log("Diagonal");
//     break;
//   case "torre":
//     console.log("Horizontal e vertical");
//     break;
//   case "peão":
//     console.log("uma casa para frente e dua no primeiro movimento");
//     break;
//   default:
//     console.log("Error");
//     break;
// }


// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// const nota = 102;

// if(nota < 0 || nota > 100){
//   console.log("Error");
// }
// else if(nota >= 90){
//   console.log("A");
// }
// else if(nota >= 80){
//   console.log("B");
// }
// else if(nota >= 70){
//   console.log("C");
// }
// else if(nota >= 60){
//   console.log("D");
// }
// else if(nota >= 50){
//   console.log("E");
// }
// else if(nota < 50){
//   console.log("F");
// }

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

// const a = 13;
// const b = 1;
// const c = 7;

// if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
//   console.log("true");
// }
// else{
//   console.log("False");
// }


const a = 13;
const b = 1;
const c = 7;

if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
  console.log("true");
}
else{
  console.log("False");
}
