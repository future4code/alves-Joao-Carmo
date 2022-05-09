/* 1. 10
10 5

2. 10 10 10

3. let horasDiaTrabalho = prompt("Quantas horas você trabalha por dia?")
let salárioDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salárioDia/horasDiaTrabalho} por hora`)

*/

// Exercícios de escrita de código
// 1.

let nome
let idade

console.log(typeof nome, typeof idade)

// O resultado foi undefined pois nenhum valor foi atribuido a variável, então ela tem um tipo indefinido.

nome = prompt("Qual é o seu nome ?")
idade = prompt("Qual é a sua idade ?")

console.log(typeof nome, typeof idade)

// As respostas de um prompt sempre serão strings, mas temos maneiras de convertê-las em outros tipos de variável

console.log("Olá", nome, ", você tem", idade, "anos.")

// 2.
let perguntaUm = prompt("Você trabalha ?")
let perguntaDois = prompt("Você estuda ?")
let perguntaTres = prompt("Você já bebeu água hoje ?")

console.log("Você trabalha ? -", perguntaUm)
console.log("Você estuda ? -", perguntaDois)
console.log("Você já bebeu água hoje ? -", perguntaTres)

// 3.
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Desafios
// 1.

let x = Number(prompt("Digite um número"))
let y = Number(prompt("Digite outro número"))

let soma = x + y
let multiplica = x * y

console.log("A soma dos números é", soma, "e multiplicando-os, temos: ", multiplica)
