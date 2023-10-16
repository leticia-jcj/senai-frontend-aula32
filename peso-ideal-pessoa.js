const readline = require('readline-sync')

/* 7 - algoritmo que calcule o peso ideal de uma pessoa.
Dados de entrada:
- altura
- sexo.

Fórmulas para cálculo do peso:
- peso ideal de homem = (72,7 x altura) - 58
- peso ideal da mulher = (62,1 x altura) - 44,7

*/
console.log("|----------------------------|")
console.log("|       Qual seu sexo?       |")
console.log("|                            |")
console.log("| Digite [1] para Masculino  |")
console.log("| Digite [2] para Feminino   |")
console.log("|                            |")
console.log("|----------------------------|")

const sexo = readline.questionInt("Digite uma opção: ")

if (sexo < 1 || sexo > 2) {
    console.log("Opção inválida!")

} else if (sexo == 1) {
    const altura = readline.questionFloat("Qual sua altura? ")
    console.clear()

    let imc = ((72.7 * altura)-58).toFixed(2);
    console.log(`Sexo: Masculino`)
    console.log(`Altura: ${altura}`)
    console.log(`Peso ideal: ${imc}kg`)

} else {
    const altura = readline.questionFloat("Qual sua altura? ")
    console.clear()

    let imc = (((62.1*altura)-44.7)).toFixed(2);
    console.log(`Sexo: Feminino`);
    console.log(`Altura: ${altura}`)
    console.log(`Peso Ideal: ${imc}kg`);
}

