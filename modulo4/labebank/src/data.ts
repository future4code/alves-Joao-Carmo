export type transacao = {
    valor: number,
    data: string,
    descricao: string
}

export type conta = {
    id: number,
    nome: string,
    cpf: string,
    dataNascimento: string,
    saldo: number,
    extrato: transacao[]
}
