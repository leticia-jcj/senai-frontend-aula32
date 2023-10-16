const readline = require('readline-sync')

/*
5 leia uma variável
some 5 caso par
some 8 caso ímpar
imprimir o resultado desta operação.
*/
let calc = 0
let numero = readline.questionInt("Digite um número: ")

if (numero % 2 == 0) {
    console.log(`O número ${numero} é par`)
    calc = numero + 5
    console.log(`${numero} + 5 = ${calc}`)
    
} else {
    console.log(`O número ${numero} é ímpar`)
    calc = numero + 8
    console.log(`${numero} + 8 = ${calc}`)
}