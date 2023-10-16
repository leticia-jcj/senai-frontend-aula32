const readline = require('readline-sync')

/* 
3. Faça um algoritmo que receba dois números e a operação que se deseja fazer
                 soma
                 subtração
                 multiplicação
                 divisão).
*/
let calc = 0

console.log("| + - * / TABUADA / * - + |")
console.log("|                         |")
console.log("|     [1]    SOMAR        |")
console.log("|     [2]    SUBTRAIR     |")
console.log("|     [3]    DIVIDIR      |")
console.log("|     [4]    MULTIPLICAR  |")
console.log("|                         |")
console.log("|-------------------------|")

const n1 = readline.questionFloat("Digite um numero: ")
const n2 = readline.questionFloat("Digite outro numero: ")
const opcao = readline.questionInt("Escolha a operação: ")

if(opcao < 1 &&  opcao > 4){
    console.log("Opção inválida.")

} else {
    
    switch(opcao){
        case 1:
            calc = n1 + n2
            break

        case 2:
            calc = n1 - n2
            break

        case 3:
            calc = n1 / n2
            break

        case 4:
            calc =  n1 * n2
            break

        default:
            n1 = 0
            n2 = 0
            calc = 0
            break
    }

    console.log(`Resultado do calculo: ` + calc)    

}