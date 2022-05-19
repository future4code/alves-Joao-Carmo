/* Exercícios de interpretação de código
1. Serão impressos o elemento do array, seguido do seu index e por fim o array completo.
'"Objeto 1", 0, array completo'

2. Serão impressos os nomes de cada um dos 3 objetos.

3. Serão impressos os apelidos de todos os objetos que forem diferentes de "Chijo"

*/

// Exercícios de escrita de código
// 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a.
const novoArray = pets.map((item, index, array) => {
    return item.nome
})

console.log(novoArray)

// b.

const novoArray1 = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(novoArray1)

// c.

const novoArray2 = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
})
const novoArray3 = novoArray2.map((item, index, array) => {
    return item = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})

console.log(novoArray3)

// 2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a.

const novoArray4 = produtos.map((item, index, array) => {
    return item.nome
})

console.log(novoArray4)

// b.

const novoArray5 = produtos.filter((item, index, array) => {
    return item.categoria == true
})
const novoArray6 = produtos.map((item, index, array) => {
    novoObj = {nome: item.nome,preco: (item.preco * 0.95)}
    return novoObj
})

console.log(novoArray6) 

// c. 

const novoArray7 = produtos.filter((item, index, array) => {
    return item.categoria == "Bebidas"
})

console.log(novoArray7)

// d.

const novoArray8 = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})

console.log(novoArray8)

// e.

const novoArray9 = novoArray8.map((item, index, array) => {
    return `Compre ${item.nome} por R$${item.preco}`
})

console.log(novoArray9)

// Desafios
// 1.

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const arrayPkmn = pokemons.map((item, index, array) => {
    return item.nome
})

console.log(arrayPkmn.sort())

// 2.

const arrayPkmn1 = pokemons.map((item, index, array) => {
    return item.tipo
})

let unique = [...new Set(arrayPkmn1)]
console.log(unique)