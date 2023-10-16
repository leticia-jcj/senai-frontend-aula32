const readline = require('readline-sync')

let situacao = ""

const nome = readline.question("Nome: ")
const nota1 = readline.questionFloat("Nota 1: ")
const nota2 = readline.questionFloat("Nota 2: ")
const nota3 = readline.questionFloat("Nota 3: ")
const nota4 = readline.questionFloat("Nota 4: ")

const media = (nota1 + nota2 + nota3 +nota4)/4

if (media => 7) {
    situacao = "Aprovado"

} else if (media > 4) {
    situacao = "Recuperação"

} else {
    situacao = "Reprovado"
}

console.clear()

console.log("----Boletim----")
console.log(`Aluno: ${nome}`)
console.log(`Nota 1: ${nota1}`)
console.log(`Nota 2: ${nota2}`)
console.log(`Nota 3: ${nota3}`)
console.log(`Nota 4: ${nota4}`)
console.log(`Média: ${media}`)
