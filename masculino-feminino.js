const readline = require('readline-sync')

/* 
1. Ler do teclado o sexo de uma pessoa. Se o sexo digitado for M ou F, escrever na tela “Sexo válido!”. Caso contrário, informar “Sexo inválido!”;
*/
console.log("|----- SEXO ------|")
console.log("|                 |")
console.log("| [M]  Masculino  |")
console.log("| [F]  Feminino   |")
console.log("|                 |")
console.log("|-----------------|")

const opcao = readline.question("Escolha: ")
const upperCase = opcao.toUpperCase()

if(upperCase != "M" && upperCase != "F"){
    console.log("Sexo inválido!")

} else {
    console.log("Sexo Válido|")
}


