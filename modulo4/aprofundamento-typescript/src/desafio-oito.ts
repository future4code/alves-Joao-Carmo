type prato = {
    nome: string,
    custo: number,
    valorVenda: number,
    ingredientes: string[]
}

const pratos: prato[] = []
const vendas: number[] = []
let lucroTotal: number = 0
const prato1: prato = {
    nome: 'Sanduiche',
    custo: 10,
    valorVenda: 20,
    ingredientes: ['Pão', 'Queijo', 'Presunto']
}

function cadastraPrato(prato: prato) {
    pratos.push(prato)
    return pratos
}

function checaValor(nome:string) {
    const produtoFiltrado = pratos.filter((item) => {
        return item.nome === nome
    })
    let valorDoProduto: number = produtoFiltrado[0].valorVenda
    return valorDoProduto
}

function venda(prato: prato) {
    let lucro: number = prato.valorVenda - prato.custo
    vendas.push(lucro)
    return vendas
}

function determinaLucro(vendas: number[]) {
    lucroTotal = vendas.reduce((partialSum, a) => partialSum + a, 0)
    return lucroTotal
}

cadastraPrato(prato1)
venda(prato1)
determinaLucro(vendas)
console.log(pratos)
console.log(checaValor(prato1.nome))
console.log(lucroTotal)