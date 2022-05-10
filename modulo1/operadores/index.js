/* exercício 1:

a. false
b. false
c. true
d. boolean


exercício 2:
É necessário fazer a conversão do string em number,
uma vez que toda resposta de prompt é string.
A variável soma vai fazer uma concatenação em vez de soma.

exercício 3:
Adicionar parseFloat antes de prompt (já que esste comando inclui números decimais):

let primeiroNumero = parseFloat(prompt("Digite um numero!"))
let segundoNumero = parseFloat(prompt("Digite outro numero!"))


*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO
//exercício 1

let idade
let idade1
idade = parseFloat(prompt("Qual a sua idade?"))
idade1 = parseFloat(prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga?"))

console.log(idade)
console.log(idade1)
console.log("A sua idade é maior do que a do seu melhor amigo?", idade>idade1)

let diferenca = idade - idade1
console.log("A diferença de idade é de", diferenca, "anos." )

//exercício 2

let numero
numero = parseFloat(prompt("Digite um número par"))

resultado = numero % 2

console.log(resultado)

//O padrão é sempre 0, pois a divisão é exata
//para numero ímpar, aparece no console o número 1 (resto).


//exercício 3

let idade3
idade3  = parseFloat(prompt("Qual a sua idade?")) 

let meses = idade3 * 12
console.log("Idade em meses é", meses, "meses.")
let dias = meses * 30
console.log("Idade em dias é", dias, "dias.")
let horas = dias * 24
console.log("Idade em horas é de", horas, "horas.")


//exercicio 4

let numero1
numero1 = parseFloat(prompt("Digite um número"))
let numero2
numero2 = parseFloat(prompt("Digite outro número"))

resultado1 = numero1>numero2
console.log("o primeiro número é maior que o segundo?", resultado1)

resultado2 = numero1===numero2
console.log("o primeiro número é igual ao segundo?", resultado2)

resultado3 = (numero1 % numero2)=== 0
console.log("o primeiro número é divisível pelo segundo?", resultado3)

resultado4 = (numero2 % numero1) === 0
console.log("o segundo número é divisível pelo primeiro?", resultado4)