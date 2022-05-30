var readLineSync = require('readLine-sync');
// Faça um programa que receba a idade de uma pessoa em anos e
// imprima essa idade em: Meses, Dias, Horas, Minutos.

// entrada
let idade = readLineSync.question('Qual sua idade? ');

// processamento
let idadeMeses = idade * 12;
let idadeDias = idade * 365;
let idadeHoras = idadeDias * 24;
let idadeMinutos = idadeHoras * 60;


// saída  
console.log("Meses: " + idadeMeses); 
console.log("Dias: " + idadeDias); 
console.log("Horas: " + idadeHoras); 
console.log("Minutos: " + idadeMinutos); 


