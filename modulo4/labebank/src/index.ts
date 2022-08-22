import express from "express";
import cors from "cors";
import { isExportDeclaration } from "typescript";
import { conta, transacao, transferencia } from './data'
import { contas } from './contas'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});


// Lista de contas

app.get('/contas', (req, res) => {
    let errorCode: number = 400
    try {
        if (!contas.length) {
            errorCode = 404
            throw new Error("Lista de contas vazia.")
        }
        res.status(200).send(contas)
    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
})

// Criação de nova conta
app.post('/contas', (req, res) => {
    let errorCode: number = 400
    try {
        const { nome, cpf, dataNascimento } = req.body
        if (!nome || !cpf || !dataNascimento) {
            errorCode = 400
            throw new Error('Algo deu errado, checar informações.')
        }
        if (typeof nome !== 'string' || typeof cpf !== 'string' || typeof dataNascimento !== 'string') {
            errorCode = 422
            throw new Error('Checar informações.')
        }

        const [dia, mes, ano] = dataNascimento.split('/')
        const novaDataNascimento = new Date(`${ano}-${mes}-${dia}`)
        let hoje: any = new Date();
        let idade = Math.floor((hoje - new Date(novaDataNascimento).getTime()) / 3.15576e+10)
        if ((idade) < 18) {
            errorCode = 406
            throw new Error('O cliente deve ter mais que 18 anos.')
        }

        const cpfsContas = contas.map((item) => item.cpf)
        if (cpfsContas.includes(cpf)) {
            errorCode = 422
            throw new Error('Já existe uma conta com esse CPF.')
        }

        const novaConta: conta = {
            id: contas.length + 1,
            nome,
            cpf,
            dataNascimento,
            saldo: 0,
            extrato: []
        }

        contas.push(novaConta)

        res.status(201).send('Conta criada com sucesso!')
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// Checa saldo de conta por cpf 
app.get('/contas/:cpf', (req, res) => {
    let errorCode: number = 400
    try {
        const cpf = req.params.cpf
        const contaUser = contas.find((item) => item.cpf === cpf)

        if (!cpf) {
            errorCode = 422
            throw new Error('Cpf inválido.')
        }

        if (!contaUser) {
            errorCode = 404
            throw new Error('Conta não existe.')
        }

        res.status(200).send({ saldo: contaUser.saldo })
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// Faz depósito
app.put('/contas/:cpf/:nome/deposito', (req, res) => {
    let errorCode: number = 400
    try {
        const { cpf, nome } = req.params
        const { valor } = req.body
        if (!nome || !cpf || !valor || typeof valor !== 'number' || !contas) {
            errorCode = 422
            throw new Error('Checar informações.')
        }

        let indexConta = contas.findIndex((item) => item.cpf === cpf && item.nome === nome)
        if (indexConta < 0) {
            errorCode = 404
            throw new Error('Conta não existe.')
        }

        let hoje: Date | string = new Date();
        let dd = String(hoje.getDate()).padStart(2, '0')
        let mm = String(hoje.getMonth() + 1).padStart(2, '0')
        let aaaa = hoje.getFullYear()
        hoje = dd + '/' + mm + '/' + aaaa

        const novoDeposito: transacao = {
            valor,
            data: hoje,
            descricao: "Depósito de dinheiro."
        }

        contas[indexConta].extrato.push(novoDeposito)

        res.status(200).send('Valor depositado !')

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// Faz pagamento
app.put('/contas/:cpf/pagamento', (req, res) => {
    let errorCode: number = 400
    try {
        const cpf = req.params.cpf
        const { valor, descricao } = req.body
        let { data } = req.body
        if (!descricao || !valor || typeof valor !== 'number' || typeof descricao !== 'string') {
            errorCode = 422
            throw new Error('Checar informações.')
        }
        if (data && typeof data !== 'string') {
            errorCode = 422
            throw new Error('Checar informações.')
        }
        if (!data) {
            data = new Date()
            let dd = String(data.getDate()).padStart(2, '0')
            let mm = String(data.getMonth() + 1).padStart(2, '0')
            let aaaa = data.getFullYear()
            data = dd + '/' + mm + '/' + aaaa
        }

        if (data && typeof data === 'string') {
            let dd1 = data.split('/')[0]
            let mm1 = data.split('/')[1]
            let aaaa1 = data.split('/')[2]
            let dataPagamento: Date | string = mm1 + '/' + dd1 + '/' + aaaa1
            dataPagamento = new Date(dataPagamento)

            let hoje: Date | string = new Date();
            let dd = String(hoje.getDate()).padStart(2, '0')
            let mm = String(hoje.getMonth() + 1).padStart(2, '0')
            let aaaa = hoje.getFullYear()
            let dataIngles = mm + '/' + dd + '/' + aaaa

            if (new Date(dataPagamento).getTime() < new Date(dataIngles).getTime()) {
                errorCode = 422
                throw new Error('Data inválida.')
            }
        }

        const indexConta = contas.findIndex((item) => item.cpf === cpf)
        if (indexConta < 0) {
            errorCode = 404
            throw new Error('Conta não existe.')
        }

        const pagamento: transacao = {
            valor,
            data,
            descricao
        }

        const contaCliente = contas[indexConta]
        if (Math.abs(valor) > contaCliente.saldo) {
            res.statusCode = 406
            throw new Error("Saldo insuficiente")
        }

        contaCliente.extrato.push(pagamento)
        res.status(201).send("Pagamento realizado !")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

// Atualiza saldo da conta, somente contas com datas anteriores a atual
app.put('/contas/:cpf', (req, res) => {
    let errorCode: number = 400
    try {
        const cpf = req.params.cpf
        const indexConta = contas.findIndex((item) => item.cpf === cpf)
        if (indexConta < 0) {
            res.statusCode = 404
            throw new Error("Conta não existe")
        }

        let hoje: Date | string = new Date();
        let dd = String(hoje.getDate()).padStart(2, '0')
        let mm = String(hoje.getMonth() + 1).padStart(2, '0')
        let aaaa = hoje.getFullYear()
        let dataIngles = mm + '/' + dd + '/' + aaaa

        let novoSaldo = contas[indexConta].saldo
        contas[indexConta].extrato.forEach((item) => {
            let dd1 = item.data.split('/')[0]
            let mm1 = item.data.split('/')[1]
            let aaaa1 = item.data.split('/')[2]
            let dataPagamento: Date | string = mm1 + '/' + dd1 + '/' + aaaa1
            dataPagamento = new Date(dataPagamento)
            if (new Date(dataPagamento).getTime() < new Date(dataIngles).getTime())
                return novoSaldo += item.valor
        })

        contas[indexConta].saldo = novoSaldo

        res.status(200).send("Saldo atualizado !")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})

app.post('/contas/:cpf/:nome/transferencia', (req, res) => {
    let errorCode: number = 400
    try {
        const { nome, cpf } = req.params
        const { nomeDestino, cpfDestino, valor } = req.body

        if (!cpf || !nome || !nomeDestino || !cpfDestino) {
            res.statusCode = 400
            throw new Error("Algo deu errado, checar informações.")
        }

        let hoje: Date | string = new Date();
            let dd = String(hoje.getDate()).padStart(2, '0')
            let mm = String(hoje.getMonth() + 1).padStart(2, '0')
            let aaaa = hoje.getFullYear()
            hoje = dd + '/' + mm + '/' + aaaa

        const transferencia: transacao = {
            valor,
            data: hoje, 
            descricao: "Transferência."
        }

        const indexConta = contas.findIndex((item) => item.cpf === cpf)
        const indexDestino = contas.findIndex((item) => item.cpf === cpfDestino)
        if (indexConta < 0) {
            errorCode = 404
            throw new Error('Conta não existe.')
        }
        if (indexDestino < 0) {
            errorCode = 404
            throw new Error('Conta de destino não existe.')
        }

        const contaCliente = contas[indexConta]
        const contaDestino = contas[indexDestino]
        if (Math.abs(valor) > contaCliente.saldo) {
            res.statusCode = 406
            throw new Error("Saldo insuficiente")
        }
        
        contaCliente.extrato.push(transferencia)
        contaDestino.extrato.push(transferencia)

        res.status(200).send("Transferência realizada !")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})