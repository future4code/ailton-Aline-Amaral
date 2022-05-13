/* Exercícios de interpretação de código
1.a) 10; 50;
b) não aparecia nada no console, pois apenas console.log evoca mostrar a mensagem no console.


2.
a. Explique o que essa função faz e qual é sua utilidade
A função coloca as letras todas em minúsculas e procura a palavra "cenoura".
Serve para encontrar a palavra com letra maiúscula, minúscula ou alternado.

b.
     i.   true
     ii.  true
     iii. true - porque não é array (que busca exatamente aquela composição de palavras)
 */

// Exercícios de escrita de código

// 1.
function informacoes() {
    const infos =  console.log("Eu sou Aline, tenho 30 anos, moro em Porto Alegre e sou estudante.")
}

//b.
const diferentesParametros = (nome, idade, cidade, profissao) => {

    return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}

console.log(diferentesParametros("Laís", 23,"São Paulo", "instrutora"))


//2
//a.
const soma = (num1, num2) => {
    conta = num1 + num2
    return conta
}
console.log(soma(1, 2))

//b.
const trueOrFalse = (num1, num2) => {
    maiorIgual = num1 >= num2
    return maiorIgual
}
console.log(trueOrFalse(1, 2))

//c.
const parOuImpar = (num1) => {
    par = (num1 % 2) === 0
    return par
}
console.log(parOuImpar(2))


//d.
const mensagem = (msgString) => {
    escrito = (msgString).toUpperCase()
    return escrito
}

const msg = mensagem("Olá, mundo! Como vocês estão?")
console.log(msg), console.log(msg.length)


const numero1 = parseFloat(prompt("Insira um número"))
const numero2 = parseFloat(prompt("Insira outro número"))

const sum = (soma) => {
    soma = numero1 + numero2
    return soma
}

const sub = (subtracao) => {
    subtracao = numero1 - numero2
    return subtracao
}    
const multi = (multiplicacao) => {
    multiplicacao = numero1 * numero2
    return multiplicacao
}
const div = (divisao) => {
    divisao = numero1 / numero2
    return divisao
}
console.log(`Números inseridos ${numero1}, ${numero2}`)    
console.log(`Soma: ${sum(numero1, numero2)}`)
console.log(`Diferença: ${sub(numero1, numero2)}`)
console.log(`Multiplicação: ${multi(numero1, numero2)}`)
console.log(`Divisão: ${div(numero1, numero2)}`)