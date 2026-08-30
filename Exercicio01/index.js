/*
Paulo Ricardo Santana tem 26 anos, pesa 105 kg
tem 1,87 de altura e seu IMC é de 30.02880658436214
Paulo Ricardo Santana nasceu em 2000
*/

const nome = 'Paulo Ricardo';
const sobrenome = 'Santana';
const idade = 26;
const peso = 105;
const alturaEmM = 1.87;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM); // peso / (altura * altura)
let anoNascimento = 2026 - idade; 

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem, ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);