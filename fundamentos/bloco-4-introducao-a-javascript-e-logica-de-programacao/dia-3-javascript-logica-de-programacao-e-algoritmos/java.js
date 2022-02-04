// let fatorial = 1;

// for(let i = 10; i > 0; i-=1){
//   fatorial *= i;
// }

// console.log(fatorial);

// https://pt.stackoverflow.com/questions/5943/como-inverter-uma-string-em-javascript

// let word = "tryber";
// let contador = "";

//   contador += word.split('').reverse().join('');

// console.log(contador);


// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let palavraG =  array[0]
// let palavraP =  array[0]

// for(let i = 0; i < array.length; i += 1){
//   if(array[i].length > palavraG.length){
//     palavraG = array[i]
//   }

// }
// for(let i = 0; i < array.length; i += 1){
//   if(array[i].length < palavraP.length){
//     palavraP = array[i]
//   }

// }

// console.log(palavraG);
// console.log(palavraP);
let verificador = 0;
let maiorPrimo = 0;
for(let i = 0; i <= 50; i+=1){
verificador+=1;
for(let j = 2; j < i; j+=1){
  if(i % j === 0){
    verificador = 0;
   
  }
}
if(verificador >=1){
  maiorPrimo = i;
  
}
}
console.log(maiorPrimo);