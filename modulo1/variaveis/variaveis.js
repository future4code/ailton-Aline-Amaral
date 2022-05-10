/*parte-1
1) 10
10, 5

2) 10, 10, 10

3) P = horasDeTrabalho
t = valorPorDia

parte-2 */

let nome
let idade 

console.log(typeof nome, typeof idade)

//"aparece undefined às variáveis, pois não há valor atribuído"
//"se fosse colocado sinal de atribuição (=), daria erro de sintaxe"

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")


/* "cada prompt representa uma linha no console" */

console.log(typeof nome, typeof idade)

console.log("Olá,", nome, "você tem", idade, "anos.")

//"aparece string também para a variável que é um número, pois o que foi digitado na caixa de diálogo recebe aspas, transformando o número em texto (string)"

// parte-3

let pergunta1

pergunta1 = confirm("Você está feliz hoje?")

let pergunta2

pergunta2 = confirm("Está fazendo sol?")

let pergunta3

pergunta3 = confirm("Você tem casa própria?")


console.log("Você está feliz hoje?", pergunta1)
console.log("Está fazendo sol?", pergunta2)
console.log("Você tem casa própria?", pergunta3)



let a = 5
let b = 10
let c
c = a
a = b
b = c