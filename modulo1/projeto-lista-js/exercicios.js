/* // EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
 */
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  area = (altura * largura)/2
  return area
}
let valorAltura = parseFloat(prompt(`Digite a altura de um triângulo`))
let valorLargura = parseFloat(prompt(`Digite a largura de um triângulo`))

console.log(calculaAreaRetangulo(valorAltura, valorLargura))


// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  idade = anoAtual - anoNascimento
  return idade
}
let hoje = parseFloat(prompt(`Digite em que ano estamos`))
let nascimento = parseFloat(prompt(`Digite o ano de seu nascimento`))

console.log(imprimeIdade(hoje, nascimento))


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  imc = peso/altura**2
  return imc
}
let peso1 = parseFloat(prompt(`Digite seu peso`))
let altura1 = parseFloat(prompt(`Digite sua altura`))

console.log(parseFloat(calculaIMC(peso1, altura1)))


// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  return `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

}
let nome1 = prompt(`Qual seu nome?`)
let idade1 = parseFloat(prompt(`Qual sua idade?`))
let email1 = prompt(`Qual seu e-mail?`)

console.log(imprimeInformacoesUsuario(nome1, idade1, email1))


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  let arrayCores = [cor1, cor2, cor3]
  return arrayCores
}
let cor1 = prompt(`Diga sua cor favorita`)
let cor2 = prompt(`Diga outra cor favorita`)
let cor3 = prompt(`Mais uma cor que você ame, por favor!`)

console.log(imprimeTresCoresFavoritas(cor1, cor2, cor3))

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  frase = string.toUpperCase()
  return frase
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  numeroIngressosMinimo = custo/valorIngresso
  return numeroIngressosMinimo
}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  tamanhosIguais = string1.length === string2.length
  return tamanhosIguais
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  elemento1 = array[0]
  return elemento1
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  elementoFinal = array.slice[-1]
  return elementoFinal

}
console.log(retornaPrimeiroElemento([2, 3, 4]))

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}