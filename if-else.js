const readline = require('readline-sync')

var num = readline.questionInt("Numero: ")

if (num % 2 == 0) {
    console.log(`o numero ${num} é par`)
    
} else {
    console.log(`o numero ${num} é ímpar`)
}