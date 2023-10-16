const readline = require('readline-sync')
const date = new Date()

const anoAtual = date.getFullYear()
const anoNasc = readline.questionInt("Ano de nascimento: ")

const idade = anoAtual - anoNasc

console.log(`Sua idade é: ${idade} anos`)