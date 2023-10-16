const readline = require('readline-sync')

/* 
2. A escola “APRENDER” faz o pagamento de seus professores por hora/aula. Faça um algoritmo que calcule e exiba o salário de um professor. Sabe-se que o valor da
hora/aula segue a tabela abaixo:

Professor Nível 1 R$12,00 por hora/aula
Professor Nível 2 R$17,00 por hora/aula
Professor Nível 3 R$25,00 por hora/aula
*/
 let salario = 0
 //let nivel1 = 12

console.log("|----------- ESCOLA APRENDER ------------|")
console.log("|                                        |")
console.log("| -- NÍVEL PROFESSOR | VALOR HORA/AULA --|")
console.log("|                                        |")
console.log("|          [1]             R$12,00       |")
console.log("|          [2]             R$17,00       |")
console.log("|          [3]             R$25,00       |")
console.log("|                                        |")
console.log("|----------------------------------------|")

const opcao = readline.questionInt("Digite o nivel do professor de acordo com a tabela: ")

if(opcao < 1 &&  opcao > 3){
    console.log("Opção inválida")

} else {

    const horaAula = readline.questionInt("Digite a quantide hora/aula: ")
    
    switch(opcao){
        case 1:
            salario = 12 * horaAula
            break
        
        case 2:
        salario = 17 * horaAula
        break

        case 3:
        salario = 25 * horaAula
        break

        default:
            opcao = 0
            horaAula = 0
            break
    }

    console.log(`Nivel do professor: ${opcao}`)
    console.log(`Hora/aula: ${horaAula}`)
    console.log(`Salário a receber: ${salario.toLocaleString('pt-BR',{

        style: 'currency',
        currency: 'BRL'

    })}`)

}