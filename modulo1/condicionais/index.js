// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* 
1.     
    a) O código verifica se o número pedido pelo usuário é divisível por 2, 
    retornando 0 se for, e 1 se não for (resto da divisão).

    b) Números pares. 

    c) Números ímpares. 
     
2.     
    a) Para determinar o preço da fruta definida pelo usuário.
    
    b) O preço da fruta Maçã é R$ 2.25.

    c) O preço da fruta Pêra é R$ 5, pois o valor preco está sendo reatribuído.

3. 

    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
    ```

    a) Criando uma variável que pede o primeiro valor de número ao usuário

    
    b) Número 10: Qual será a mensagem do terminal? E se fosse o número -10?
    
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO

//1.
const idade = Number(prompt(`Qual a sua idade?`))

if (idade>=18){
    console.log("Você pode dirigir")
}else {console.log("Você não pode dirigir.")
}

//2.
const turno = prompt(`Em que turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.`).toLowerCase()
if (turno === "m"){
    console.log("Bom dia!")
} else if (turno === "v"){
    console.log("Boa tarde!")
} else if (turno === "n"){
    console.log("Boa noite!")
} else {
    console.log("Você digitou errado")
}

//3.
let turnoEstudo = prompt(`Em que turno você estuda? Digite M para matutino, V para vespertino ou N para noturno.`).toLowerCase()
switch (turnoEstudo) {
    case "m":
        console.log("Bom dia!")
        break;
    case "v":
        console.log("Boa tarde!")
        break;
    case "n":
        console.log("Boa noite!")
        break;
    default:
        console.log("Você digitou errado")
        break
}

//4.
let genero = prompt("Qual o gênero do filme ao qual você quer assistir?").toLowerCase()
let valorIngresso = Number(prompt("Qual o valor do ingresso em reais?"))

if (genero === "fantasia"){
    if (valorIngresso<15){
        console.log("Bom filme!")
    }
} else {
    console.log("Escolha outro filme :(")
}

 //DESAFIO
//1.
let genero1 = prompt("Qual o gênero do filme ao qual você quer assistir?").toLowerCase()
let valorIngresso1 = Number(prompt("Qual o valor do ingresso em reais?"))

if (genero1 === "fantasia"){
    if (valorIngresso1<15){
        let lanche = prompt("Qual lanchinho você vai comprar?")
        console.log("Bom filme!")
        console.log(`Aproveite o seu ${lanche}!`)
    }
} else {
    console.log("Escolha outro filme :(")
}