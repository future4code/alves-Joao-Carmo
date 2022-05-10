/* Exercícios de interpretação de código

1.
a. false
b. false
c. true
d. boolean

2.Será impresso as respostas recebidas concatenadas.
Exemplo: 
primeiroNumero = "5"
segundoNumero = "10"
soma = "510"

Isso acontece pois toda resposta de um prompt é uma string. 
Para obter a soma corretamente, deve-se converter essas respostas para número, usando Number(var).

3. Uma possível correção seria:
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)

Ou:
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

*/

// Exercícios de escrita de código
// 1.

let idade1 = Number(prompt("Qual é a sua idade ?"))
let idade2 = Number(prompt("Qual é a idade do seu melhor amigo/amiga ?"))

console.log("Sua idade é maior do que a do seu melhor amigo ?", idade1 > idade2)
console.log(idade1 - idade2)

// 2.

let numeroPar = Number(prompt("Digite um número par"))

console.log(numeroPar % 2)

// c. O resto de um número par dividido por 2 será sempre 0
// d. Ao inserir um número ímpar, o console irá mostrar o resto da divisão, que será maior que 0.

// 3.

let idade = Number(prompt("Quantos anos você tem ?"))

console.log(idade * 12, "meses.")
console.log(idade * 365, "dias.")
console.log(idade * 8760, "horas.")

// 4.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero % segundoNumero == 0)
console.log("O segundo numero é divisível pelo primeiro?",  segundoNumero % primeiroNumero == 0)

// Desafios
// 1.
// a.

let tempF = 77
let tempK = (tempF - 32)*(5/9) + 273.15

console.log(tempK, "K")

// b.

let tempC = 80
let tempF2 = tempC*(9/5) + 32

console.log(tempF2, "ºF")

// c.

let tempC2 = 30
let tempF3 = tempC2*(9/5) + 32
let tempK2 = (tempF3 - 32)*(5/9) + 273.15

console.log(tempF3, "ºF")
console.log(tempK2, "K")

// d.

let tempC3 = Number(prompt("Digite uma temperatura em Graus Celsius"))
let tempF4 = tempC3*(9/5) + 32
let tempK3 = (tempF4 - 32)*(5/9) + 273.15

console.log(tempF4, "ºF")
console.log(tempK3, "K")

// 2.

let consumo = 280
let custo = 0.05
let conta = consumo * custo

console.log("R$",conta)

let desconto = 0.85
conta = (consumo * custo) * desconto

console.log("R$",conta)

// 3.
// a. lb -> Kg

let lb = 20
let kg = lb / 2.205

console.log("20lb equivalem a", kg, "kg.")

// b. oz -> Kg

let oz = 10.5
let kg2 = oz / 3.5274

console.log("10.5oz equivalem a", kg2, "kg.")

// c. mi -> m

let mi = 100
let m = mi * 1609

console.log("100mi equivalem a", m, "m.")

// d. ft -> m

let ft = 50
let m2 = ft / 3.281

console.log("50ft equivalem a", m2, "m.")

// e. gal -> l

let gal = 103.56
let l = gal * 3.785

console.log("103.56gal equivalem a", l, "l.")

// f. xic -> l

let xic = 450
let l2 = xic / 3.52

console.log("450xic equivalem a", l2, "l.")

// g.

let xic2 = Number(prompt("Digite o número de xícaras"))
let l3 = xic2 / 3.52

console.log(xic2, "xic equivalem a", l3, "l.")