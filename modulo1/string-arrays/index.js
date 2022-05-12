/*
Exercícios de interpretação de código

1.
a. undefined
b. null
c. 11
d. 3
e.(essa eu errei, olhei o resultado) [3, 19, 5, 7, 8, 9 ,10, 11, 12, 13]
f. 9

2. SUBI NUM ÔNIBUS EM MIRROCOS, 4
*/

//Exercício de escrita de código

//1.
const nomeDoUsuario = prompt(`Digite seu nome`)
const emailDoUsuario = prompt(`Digite seu email`)

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2.
//a.
const favFoods = [`frango`, `ovo`, `sushi`, `pizza`, `queijo`]

 //b.
 console.log(`Essas são as minhas comidas preferidas:`, favFoods)


/*

    c) Aqui vai um desafio: pergunte ao usuário uma 
    comida preferida. Troque a segunda comida da sua 
    lista pela inserida pelo usuário.
    Imprima no consolea nova lista
    
    
//3.
*/
let listaDeTarefas = []

const tarefa1 = prompt(`Digite uma tarefa que você precise realizar no dia`)
const tarefa2 = prompt(`Digite uma segunda tarefa que você precise realizar no dia`)
const tarefa3 = prompt(`Digite uma terceira tarefa que você precise realizar no dia`)

listaDeTarefas = [tarefa1, tarefa2, tarefa3]

console.log(listaDeTarefas)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
const tarefaRealizada = Number(prompt(`Digite o número da tarefa que você já realizou`))
let tarefaReal = tarefaRealizada - 1

let tarefaReal2 = parseFloat(tarefaReal)

console.log(tarefaReal2)

let listaPendentes = listaDeTarefas.splice(tarefaReal)

console.log(listaPendentes)