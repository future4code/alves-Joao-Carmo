// a) 
// const minhaString:string = 8

// Não é possivel atribuir um valor de type diferente do especificado na vairável.

// b)
const meuNumero:string | number = 'oito'

// c)

enum CoresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta",
}
type pessoa = {
    name: string,
    idade: number,
    corFavorita: CoresArcoIris
}

const obj1: pessoa = {
    name: 'Nome1',
    idade: 22,
    corFavorita: CoresArcoIris.AZUL
}
const obj2: pessoa = {
    name: 'Nome2',
    idade: 23,
    corFavorita: CoresArcoIris.VERDE
}
const obj3: pessoa = {
    name: 'Nome3',
    idade: 24,
    corFavorita: CoresArcoIris.VERMELHO
}
const obj4: pessoa = {
    name: 'Nome4',
    idade: 25,
    corFavorita: CoresArcoIris.VIOLETA
}