/* Faça um programa que receba o nome, cargo e salário de um funcionário. Se o
funcionário ganhar abaixo de 1000 reais, calcule o salário acrescido de 10%. Ao final
exiba o nome, o cargo e o salário desse funcionário. */

let nome = "Maria";
let cargo = "Estagiaria";
let salario = 500;

if(salario<1000){
    salario = salario + (salario/100) * 10;
}

console.log("Nome:" + nome);
console.log("Cargo: " + cargo);
console.log("Salário: " + salario);