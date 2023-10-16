const readline = require('readline-sync')

const pesoMercurio = 0.37
const pesoVenus = 0.88
const pesoMarte = 0.38
const pesoJupter = 2.64
const pesoSaturo = 1.15
const pesoUrano = 1.17

let nomePlaneta = ""
let gravidadeRelativa = 0
let pesoOutroPlaneta = 0

console.log("|------------ REVISTA CIENCIA X ------------|")
console.log("|                                           |")
console.log("|  CODIGO |  PLANETA  |  GRAVIDADE RELATIVA |")
console.log("|                                           |")
console.log("|   [1]      MECÚRIO           0.37         |")
console.log("|   [2]      VÊNUS             0.88         |")
console.log("|   [3]      MARTE             0.38         |")
console.log("|   [4]      JÚPTER            2.64         |")
console.log("|   [5]      SATURNO           1.15         |")
console.log("|   [6]      URANO             1.17         |")
console.log("|                                           |")
console.log("|-------------------------------------------|")

 
const codigo = readline.questionInt("Digite o codigo do planeta: ")

if(codigo < 1 || codigo > 6){
    console.log("Opção inválida")

} else {

    const pesoNaTerra = readline.questionFloat("Digite seu peso: ")
 
    switch(codigo){

        case 1:
            nomePlaneta = "MECÚRIO"
            gravidadeRelativa = pesoMercurio
            pesoOutroPlaneta = (pesoNaTerra/10) * pesoMercurio
            break
        
        case 2:
            nomePlaneta = "VÊNUS"
            gravidadeRelativa = pesoVenus
            pesoOutroPlaneta = (pesoNaTerra/10) * pesoVenus
            break

        case 3:
            nomePlaneta = "MARTE"
            gravidadeRelativa = pesoMarte
            pesoOutroPlaneta = (pesoNaTerra/10) * pesoMarte
            break

        case 4:
            nomePlaneta = "JÚPTER"
            gravidadeRelativa = pesoJupter
            pesoOutroPlaneta = (pesoNaTerra/10) * pesoJupter
            break

        case 5:
            nomePlaneta = "SATURNO"
            gravidadeRelativa = pesoSaturo
            pesoOutroPlaneta = (pesoNaTerra/10) * pesoSaturo
            break

        case 6:
            nomePlaneta = "URANO"
            gravidadeRelativa = pesoUrano
            pesoOutroPlaneta = (pesoNaTerra/10) * pesoUrano
            break

        default:
            nomePlaneta = "--"
            gravidadeRelativa = 0
            pesoOutroPlaneta = 0
            break  

    }

    console.clear()
    console.log(`| CÓDIGO: ${codigo}`)
    console.log(`| PLANETA: ${nomePlaneta}`)
    console.log(`| GRAVIDADE RELATIVA: ${gravidadeRelativa}`)
    console.log(`|                                         `)
    console.log(`| SEU PESO NA TERRA: ${pesoNaTerra}Kg`)
    console.log(`| SEU PESO EM ${nomePlaneta} É ${pesoOutroPlaneta} Kg`)

}