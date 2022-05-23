// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort(function (a, b) {return a - b});

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(function (a) {return a % 2 === 0});
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayPares = array.filter(function (a) {return a % 2 === 0});
  return arrayPares.map(function (b) {return b ** 2});

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return array.filter(function (a, b) {return b > a});
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let objeto = {
    maiorNumero: num1,
    maiorDivisivelPorMenor: num1 % num2 === 0,
    diferenca: num1 - num2
  }

  let objeto2 = {
    maiorNumero: num2,
    maiorDivisivelPorMenor: num2 % num1 === 0,
    diferenca: num2 - num1
  }

  if (num1>num2) {
   return objeto
    } else {
      return objeto2

    }
}

/* // EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let tamanhoArray = array.length
  array.length = n
  for (n = 0; )
}
 */
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}