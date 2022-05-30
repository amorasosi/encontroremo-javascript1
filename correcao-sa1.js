//Se a peça possuir um peso superior a 100g, pode cadastrar.
//Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem dizendo  que não há espaço suficiente.
//Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

let listapecas = ["computador", "mouse", "placa mãe", "calculadora"]
let pesopeça = 100;
let nomepeca = "Computador";




if(pesopeça >= 100){
 console.log("Pode cadastrar");

} else {console.log("A peça não possue peso suficiente");}

if(listapecas.length > 10) { console.log("Não há espaço suficiente na caixa")}
    
if(nomepeca.length < 3) { console.log("Erro, especifique melhor o nome")}
