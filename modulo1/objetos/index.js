/* Exercícios de interpretação de código
1.
a. "Matheus Nachtergaele"
"Virginia Cavendish"
canal:"Globo", horario: "14h"

2.
a.nome: "Juca"
idade: 3
raca: "SRD"

nome: "Juba"
idade: 3
raca: "SRD"

nome: "Jubo"
idade: 3
raca: "SRD"

b. ela cria uma cópia do objeto referenciado.

3.
a. false
undefined

b. como "altura" não é um valor atrelado a nenhuma propriedade, ele é um elemento indefinido.

*/
// Exercícios de escrita de código
// 1.
// a.

const pessoa = {
    nome: "João",
    apelido: ["John", "Jota", "JP"]
}

function f (p) {
    console.log(`Eu sou ${p.nome}, mas pode me chamar de: ${p.apelido[0]}, ${p.apelido[1]} ou ${p.apelido[2]}`)
}

f(pessoa)

// b.

const pessoa1 = {
    ...pessoa,
    apelido: ["Joãozinho", "Joãozão", "Juba"]
}

f(pessoa1)

// 2.
// a.

const obj1 = {
    nome: "João",
    idade: "25",
    profissao: "Estudante"
}

const obj2 = {
    nome: "Pedro",
    idade: "26",
    profissao: "Desginer"
}

// b.

function f2(x) {
    let array = [x.nome, x.nome.length, x.idade, x.profissao, x.profissao.length]
    return array
}

console.log(f2(obj1))
console.log(f2(obj2))

// 3.
// a.

let carrinho = []

// b.

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "Maçã",
    disponibilidade: true
}

const fruta3 = {
    nome: "Morango",
    disponibilidade: true
}

// c.

function f3(fruta) {
    carrinho.push({fruta}) 
}

f3(fruta1)
f3(fruta2)
f3(fruta3)

// d.

console.log(carrinho)

// Desafios
// 1.

function f4() {
const usuario = {     
    nome: prompt("Qual é o seu nome ?"),  
    idade: prompt("Qual é a sua idade ?"),
    profissao: prompt("Qual é a sua profissão ?")
    }

    console.log(usuario, typeof usuario)
}

f4()

// 2.

const filme1 = {
    lancamento: 2010
}

const filme2 = {
    lancamento: 2010
}

function f5(x, y) { 
    let z = "O primeiro filme foi lançado antes do segundo ? "
    let w = x.lancamento < y.lancamento
    let z1 = "O primeiro filme foi lançado no mesmo ano do segundo? "
    let w1 = x.lancamento == y.lancamento
    return z + w + "\n" + z1 + w1
}

console.log(f5(filme1, filme2))

// 3.

function f6(fruta) {
    newFruta = {
    ...fruta,
    disponibilidade: !fruta.disponibilidade
    }
    return newFruta

}

console.log(f6(fruta2))

