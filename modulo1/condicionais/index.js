/* Exercícios de interpretação de código
1. 
a. O código recebe um numero do usuario e testa se ele é par.
b. Números pares inteiros
c. Números ímpares ou não inteiros

2. 
a. O código recebe o nome de uma fruta e retorna o seu respectivo preço.
b. "O preço da fruta Maçã é R$ 2.25"
c. A mensagem retornaria o valor padrão (default): "O preço da fruta Pêra é R$ 5"

3.
a. A primeira linha armazena na variavel "numero" um input do usuario que representa um número.
b. "Esse número passou no teste" Se o número fosse -10 não apareceria nada no console, pois -10 < 0.
c. Haverá um erro pois a variável "mensagem" existe somente dentro do escopo da condicional e ao tentar imprimi-la fora desse escopo, ela não é reconhecida.
*/

// Exercícios de escrita de código
// 1.

function f () {
    const idade = Number(prompt('Qual é a sua idade ?'))
    if (idade >= 18) {
        return "Você pode dirigir."
    } else {
        return "Você não pode dirigir."
    }
}

console.log(f())

// 2.

function f2 () {
    const turno = prompt('Qual é o seu turno? M (matutino) ou V (Vespertino) ou N (Noturno)')
    if (turno == "M") {
        return "Bom Dia!"
    } else if (turno == "V"){
        return "Boa Tarde!"
    } else {
        return "Boa Noite!"
    }
}

console.log(f2())

// 3.

const turno = prompt('Qual é o seu turno? M (matutino) ou V (Vespertino) ou N (Noturno)')
switch (turno) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N": 
        console.log("Boa Noite!")
        break
    default:
        console.log("Digite um turno válido.")

}

// 4.

function f3() {
    const genero = prompt("Genero do filme ?")
    const preco = prompt("Preço do ingresso ?")
    if (genero == "fantasia" && preco <= 15) {
        return "Bom filme!"
    } else {
        return "Escolha outro filme :("
    }
}

console.log(f3())

// Desafios
// 1.

function f4() {
    const genero = prompt("Genero do filme ?")
    const preco = Number(prompt("Preço do ingresso ?"))
    if (genero == "fantasia" && preco <= 15) {
        lanche = prompt("Qual lanchinho você vai comprar ?")
        return "Bom filme!" + ` Aproveite o seu ${lanche}`
    } else {
        return "Escolha outro filme :("
    }
}

console.log(f4())

// 2.


const dados = {
    nome: prompt("Qual é o seu nome completo ?"),
    tipoJogo: prompt("O jogo é IN(internacional) ou DO(doméstico) ?"),
    etapaJogo: prompt("O jogo é uma SF(semi-final), DT(decisão de terceiro lugar) ou FI(final) ?"),
    categoria: prompt("Categoria 1, 2, 3 ou 4 ?"),
    quantidade: prompt("Quantidade de ingressos ?")
}

const valoresSF = {
    c1d: 1320,
    c2d: 880,
    c3d: 550,
    c4d: 220,
    c1i: 1320 * 4.1,
    c2i: 880 * 4.1,
    c3i: 550 * 4.1,
    c4i: 220 * 4.1,
}

const valoresDT = {
    c1d: 660,
    c2d: 440,
    c3d: 330,
    c4d: 170,
    c1i: 660 * 4.1,
    c2i: 440 * 4.1,
    c3i: 330 * 4.1,
    c4i: 170 * 4.1,
}

const valoresFI = {
    c1d: 1980,
    c2d: 1320,
    c3d: 880,
    c4d: 330,
    c1i: 1980 * 4.1,
    c2i: 1320 * 4.1,
    c3i: 880 * 4.1,
    c4i: 330 * 4.1,
}

switch(dados.tipoJogo  + dados.etapaJogo + dados.categoria) {
    case "DO" + "SF" + "1":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresSF.c1d}\nValor total: R$ ${valoresSF.c1d*dados.quantidade}`)
        break
    case "DO" + "SF" + "2":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresSF.c2d}\nValor total: R$ ${valoresSF.c2d*dados.quantidade}`)
        break
    case "DO" + "SF" + "3":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresSF.c3d}\nValor total: R$ ${valoresSF.c3d*dados.quantidade}`)
        break
    case "DO" + "SF" + "4":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresSF.c4d}\nValor total: R$ ${valoresSF.c4d*dados.quantidade}`)
        break
    case "DO" + "DT" + "1":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresDT.c1d}\nValor total: R$ ${valoresDT.c1d*dados.quantidade}`)
        break
    case "DO" + "DT" + "2":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresDT.c2d}\nValor total: R$ ${valoresDT.c2d*dados.quantidade}`)
        break
    case "DO" + "DT" + "3":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresDT.c3d}\nValor total: R$ ${valoresDT.c3d*dados.quantidade}`)
        break
    case "DO" + "DT" + "4":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresDT.c4d}\nValor total: R$ ${valoresDT.c4d*dados.quantidade}`)
        break
    case "DO" + "FI" + "1":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresFI.c1d}\nValor total: R$ ${valoresFI.c1d*dados.quantidade}`)
        break
    case "DO" + "FI" + "2":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresFI.c2d}\nValor total: R$ ${valoresFI.c2d*dados.quantidade}`)
        break
    case "DO" + "FI" + "3":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresFI.c3d}\nValor total: R$ ${valoresFI.c3d*dados.quantidade}`)
        break
    case "DO" + "FI" + "4":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: R$ ${valoresFI.c4d}\nValor total: R$ ${valoresFI.c4d*dados.quantidade}`)
        break
    case "IN" + "SF" + "1":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresSF.c1i}\nValor total: U$ ${valoresSF.c1i*dados.quantidade}`)
        break
    case "IN" + "SF" + "2":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresSF.c2i}\nValor total: U$ ${valoresSF.c2i*dados.quantidade}`)
        break
    case "IN" + "SF" + "3":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresSF.c3i}\nValor total: U$ ${valoresSF.c3i*dados.quantidade}`)
        break
    case "IN" + "SF" + "4":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresSF.c4i}\nValor total: U$ ${valoresSF.c4i*dados.quantidade}`)
        break
    case "IN" + "DT" + "1":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresDT.c1i}\nValor total: U$ ${valoresDT.c1i*dados.quantidade}`)
        break
    case "IN" + "DT" + "2":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresDT.c2i}\nValor total: U$ ${valoresDT.c2i*dados.quantidade}`)
        break
    case "IN" + "DT" + "3":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresDT.c3i}\nValor total: U$ ${valoresDT.c3i*dados.quantidade}`)
        break
    case "IN" + "DT" + "4":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresDT.c4i}\nValor total: U$ ${valoresDT.c4i*dados.quantidade}`)
        break
    case "IN" + "FI" + "1":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresFI.c1i}\nValor total: U$ ${valoresFI.c1i*dados.quantidade}`)
        break
    case "IN" + "FI" + "2":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresFI.c2i}\nValor total: U$ ${valoresFI.c2i*dados.quantidade}`)
        break
    case "IN" + "FI" + "3":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresFI.c3i}\nValor total: U$ ${valoresFI.c3i*dados.quantidade}`)
        break
    case "IN" + "FI" + "4":
        console.log(`---Dados da compa---\nNome do cliente: ${dados.nome}\nTipo do jogo: ${dados.tipoJogo}\nEtapa do jogo: ${dados.etapaJogo}\nCategoria: ${dados.categoria}\nQuantidade de Ingressos: ${dados.quantidade} ingressos\n---Valores---\nValor do ingresso: U$ ${valoresFI.c4i}\nValor total: U$ ${valoresFI.c4i*dados.quantidade}`)
        break
    default:
        console.log("Resposta inválida")
        break

    }


