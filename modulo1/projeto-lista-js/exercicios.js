// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

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

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  const mensagem = parseFloat(prompt(`Digite um valor de altura`))
  const mensagem2 = parseFloat(prompt(`Digite um valor de largura`))
  const soma = mensagem * mensagem2
  console.log(soma)
}



// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  const mensagem = parseFloat(prompt(`Digite o ano em que estamos`))
  const mensagem2 = parseFloat(prompt(`Digite de seu nascimento`))
  const subtracao = mensagem - mensagem2
  console.log(subtracao)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso/altura**2
  return imc
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  const mensagem = prompt(`Digite seu nome`)
  const mensagem2 = parseFloat(prompt(`Digite sua idade`))
  const mensagem3 = prompt(`Digite seu e-mail`)
  console.log(`Meu nome é ${mensagem}, tenho ${mensagem2} anos, e o meu email é ${mensagem3}.`)

}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  const mensagem = prompt(`Digite sua cor favorita`)
  const mensagem2 = prompt(`Digite sua segunda cor favorita`)
  const mensagem3 = prompt(`Digite sua terceira cor favorita`)
  console.log([mensagem, mensagem2, mensagem3])
}


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
  let posicao = array[array.length-1]
  return posicao
}
 

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeira = array[0]
  let ultima = array[array.length-1]

  array[0] = ultima
  array[array.length-1] = primeira
  return array
}



// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let letraminuscula1 = string1.toLowerCase()
  let letraminuscula2 = string2.toLowerCase()
  tamanhosIguais = letraminuscula1 === letraminuscula2
  return tamanhosIguais
}


/* // EXERCÍCIO 13
function checaRenovacaoRG() {
 A função deve imprimir 
  no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não.
   A carteira precisa ser renovada segundo os seguintes critérios:

- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos
(se for exatamente 5 anos, deve ser renovada).
- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos
(se for exatamente 10 anos, deve ser renovada).
- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
  const mensagem = parseFloat(prompt(`Digite o ano em que estamos`))
  const mensagem2 = parseFloat(prompt(`Digite de seu nascimento`))
  const mensagem3 = parseFloat(prompt(`Digite o ano em que sua carteira de identidade foi emitida`))
  const idade = (mensagem - mensagem2)
  const renovaocao1 =  
  if (idade <= 20) &&  
  if  (20 < idade <= 50) 

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const mensagem = prompt(`Você tem mais de 18 anos?`)
  const mensagem2 = prompt(`Você possui ensino médio completo?`)
  const mensagem3 = prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`)
  const simOuNao = (mensagem) && (mensagem2) && (mensagem3)
  const yesOrNo = (simOuNao) 
  console.log (yesOrNo)
}
*/