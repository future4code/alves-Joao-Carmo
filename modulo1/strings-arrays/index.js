/* Exercícios de interpretação de código
1.
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

2. SUBI NUM ÔNIBUS EM MIRROCOS 27   */

// Exercícios de escrita de código
// 1.

const nomeDoUsuario = prompt("Qual é o seu nome ?")
const emailDoUsuario = prompt("Qual é o seu e-mail ?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// 2.

const array = ["Pizza", "Sorvete", "Açai", "Chocolate", "Hamburguer"]

console.log(array)
console.log(`Essas são as minhas comidas preferidas:\n${array[0]}\n${array[1]}\n${array[2]}\n${array[3]}\n${array[4]}`)

const comidaNova = prompt("Qual é a sua comida preferida ?")
array[1] = comidaNova
console.log(array)

// 3.

const listaDeTarefas = []
listaDeTarefas.push(prompt("Cite uma tarefa que você precisa realizar no dia")) 
listaDeTarefas.push(prompt("Cite outra tarefa que você precisa realizar no dia")) 
listaDeTarefas.push(prompt("Cite outra tarefa que você precisa realizar no dia")) 

console.log(listaDeTarefas)

listaDeTarefas.splice(prompt("Digite o índice de uma tarefa que você ja realizou"), 1)

console.log(listaDeTarefas)

// Desafios
// 1. O método split() divide uma String em um array de substrings.
// A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método, nesse caso o espaço entre as palavras.

const frase = prompt("Digite uma frase")
const espaço = " "
console.log(frase.split(espaço))

// 2.

const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let pos = array.indexOf("Abacaxi")
console.log(pos, array.length)
