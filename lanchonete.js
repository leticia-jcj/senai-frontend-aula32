const readline = require('readline-sync')

let lanche = ""
let precoUnitario = 0
let valorTotal = 0

const cachorroQuente = 1.10
const bauruSimples = 1.30
const bauruOvo = 1.50
const hamburger = 1.10
const cheeseburger = 1.30
const refrigerante = 1.00

 

console.log("|--------------- LANCHE DU BOM -------------|")
console.log("|                                           |")
console.log("|  CODIGO |       LANCHE       |    PRECO   |")
console.log("|                                           |")
console.log("|   [100]      Cachorro Quente     R$ 1.10  |")
console.log("|   [101]      Bauru Simples       R$ 1.30  |")
console.log("|   [102]      Bauru c/Ovo         R$ 1.50  |")
console.log("|   [103]      Hamburger           R$ 1.10  |")
console.log("|   [104]      Cheeseburger        R$ 1.30  |")
console.log("|   [105]      Refrigerante        R$ 1.00  |")
console.log("|                                           |")
console.log("|-------------------------------------------|")

 
const codigo = readline.questionInt("Digite o codigo do pedido: ")

if(codigo < 100 || codigo > 105){
    console.log("Opção inválida")

} else {

    const qtd = readline.questionInt("Quantidade: ")
 
    switch(codigo){

        case 100:
            lanche = "Cachorro Quente"
            precoUnitario = cachorroQuente
            valorTotal = qtd * cachorroQuente
            break

        case 101:
            lanche = "Bauru Simples"
            precoUnitario = bauruSimples
            valorTotal = qtd * bauruSimples
            break

        case 102:
            lanche = "Bauru c/Ovo"
            precoUnitario = bauruOvo
            valorTotal = qtd * bauruOvo
            break

        case 103:
            lanche = "Hamburger"
            precoUnitario = hamburger
            valorTotal = qtd * hamburger
            break

        case 104:
            lanche = "Cheeseburger"
            precoUnitario = cheeseburger
            valorTotal = qtd * cheeseburger
            break
        
        case 105:
             lanche = "Refrigerante"
             precoUnitario = refrigerante
             valorTotal = qtd * refrigerante
             break

        default:
            lanche = "--"
            precoUnitario = 0
            valorTotal = 0
            break  

    }

    console.clear()

    console.clear()
    console.log("| RESUMO DO PEDIDO")
    console.log(`| Descrição: ${lanche}`)
    console.log(`| Preço Unitário: ${precoUnitario.toLocaleString('pt-BR',{

        style: 'currency',
        currency: 'BRL'

    })}`)
    console.log(`| Quantidade: ${qtd}`)
    console.log(`| A pagar: ${valorTotal.toLocaleString('pt-BR',{

        style: 'currency',
        currency: 'BRL'

    })}`)

 

 

}