/*EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1.a) console.log(filme.elenco[0])
    Matheus Nachtergaele

console.log(filme.elenco[filme.elenco.length - 1])
    Virginia Cavendish

console.log(filme.transmissoesHoje[2])
    canal: "Globo", horario: "14h"

2.a) console.log(cachorro)
    nome: "Juca", 
	idade: 3, 
	raca: "SRD"

console.log(gato)
    nome: "Juba", 
	idade: 3, 
	raca: "SRD"

console.log(tartaruga)
    nome: "Jubo", 
	idade: 3, 
	raca: "SRD"


b) Clona seu valor.

3.a) console.log(minhaFuncao(pessoa, "backender"))
    false

console.log(minhaFuncao(pessoa, "altura"))
    undefined

b) Aparece false para backender, porque a propriedade está sendo chamada pela função.
Aparece undefined para altura, pois não há este elemento dentro do objeto.
*/

//1.


const pessoa = {
    nome: "Lucas",
    apelidos: [`Lu`, ` Luke`, ` Lulu`]
}

function nomear(objeto) {

    return `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos}.`
 }

 console.log(nomear(pessoa))

//2.
const novaPessoa = {
    ...pessoa,
    apelidos: [`Lucão`, ` Luluquinhas`, ` Luquinhas`]
}

console.log(nomear(novaPessoa))


3//. a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const pessoa1 = {
    nome: "Larissa",
    idade: 33,
    profissao: "paleontológa"
}

const pessoa2 = {
    nome: "Alexandre",
    idade: 40,
    profissao: "padre"
}

function juntaPessoas(person1) {
    return [person1.nome, person1.idade, person1.nome.length, person1.idade, person1.profissao, person1.profissao.length]
}

console.log(juntaPessoas(pessoa1))
console.log(juntaPessoas(pessoa2))

//3.
let carrinho = []

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "Morango",
    disponibilidade: false
}

const fruta3 = {
    nome: "Limão",
    disponibilidade: true
}

function fruits(fruit1, fruit2, fruit3) {
    carrinho.push(fruit1, fruit2, fruit3)
    return carrinho
}

console.log(fruits(fruta1, fruta2, fruta3))