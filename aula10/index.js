//String, number, undefined, null, boolean, symbol

const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; //number
const num2 = 10.52; //number
let nomeAluno; //undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; //nulo -> não aponta para local nenhum na memória
const aprovado = false; //boolean -> true ou false   

let a = 2;
const b = a; //copia o valor de a para b
console.log(a, b); // 2 2
