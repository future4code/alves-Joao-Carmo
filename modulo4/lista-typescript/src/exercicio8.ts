function checaValidade(dataNascimento: string, dataEmissao: string) {
    const dataAtual = new Date().getFullYear()
    const novaDataNascimento = new Date(dataNascimento.split("/")[2] + '-' + dataNascimento.split("/")[1] + '-' + dataNascimento.split("/")[0]).getFullYear()
    const novaDataEmissao: number = new Date(dataEmissao.split("/")[2] + '-' + dataEmissao.split("/")[1] + '-' + dataEmissao.split("/")[0]).getFullYear()
    if ( (dataAtual - novaDataNascimento <= 20) && (dataAtual - novaDataEmissao >= 5)) { 
        return true
    } else if ( (dataAtual - novaDataNascimento > 20) && (dataAtual - novaDataNascimento <= 50) && (dataAtual - novaDataEmissao >= 10)) {
        return true
    } else if ( (dataAtual - novaDataNascimento > 50) && (dataAtual - novaDataEmissao >= 15)) {
        return true
    } else {
        return false
    }
}

console.log(checaValidade("13/05/1909", "12/08/2010"))