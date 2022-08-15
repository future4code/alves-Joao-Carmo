function calculaAnagramas ( palavra: string) {
    let quantidade:number = 1
    for (let i = 1; i <= palavra.length; i++) {
       quantidade = quantidade * i
    }

    return quantidade
}

console.log(calculaAnagramas("mesa"))