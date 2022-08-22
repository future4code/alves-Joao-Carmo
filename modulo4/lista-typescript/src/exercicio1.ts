function retornaTexto(nome:string, data: string) {
    const meses: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const dia: string = data.split("/")[0]
    const mes: number = Number(data.split("/")[1])
    const ano: string = data.split("/")[2]
    const text: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${meses[mes-1]} do ano de ${ano}`
    return text
}

console.log(retornaTexto('João', '13/05/1997'))