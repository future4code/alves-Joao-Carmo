enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

function retornaType(nome: string, anoDeLancamento: number, genero: GENERO, pontuacao?: number) {
    const type = {
        nome: nome,
        anoDeLancamento: anoDeLancamento,
        genero: genero,
        pontuacao:  pontuacao
    }
    return type
}

console.log(retornaType('filme', 1999, GENERO.ACAO, 9))