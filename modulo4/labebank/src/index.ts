import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type pagamento = {
    valor: number,
    data: string,
    descricao: string
}

type conta = {
    nome: string,
    cpf: string,
    dataNascimento: string,
    saldo: number,
    extrato: pagamento[]
}

let contas: conta[] = []

function somenteLetras(str: string) {
    return /^[a-zA-Z]+$/.test(str)
}

app.get('/contas', (req, res) => {
    res.send(contas)
})

app.post('/conta', (req, res) => {
    let errorCode: number = 400
    try {
        const { nome, cpf, dataNascimento } = req.body
        if (!nome || !cpf || !dataNascimento) {
            errorCode = 422
            throw new Error('Checar informações.')
        }
        if (typeof nome !== 'string' || typeof cpf !== 'string' || typeof dataNascimento !== 'string') {
            errorCode = 422
            throw new Error('Checar informações.')
        }

        const cpfsContas = contas.map((item) => item.cpf)
        if (cpfsContas.includes(cpf)) {
            errorCode = 422
            throw new Error('Já existe uma conta com esse CPF.')
        }

        const novaConta: conta = {
            nome,
            cpf,
            dataNascimento,
            saldo: 0,
            extrato: []
        }

        contas.push(novaConta)
        res.status(200).send('Conta criada com sucesso!')
    } catch {
        res.status(errorCode).send(Error)
    }
})

app.get('/saldo', (req, res) => {
    let errorCode: number = 400
    try {
        const { nome, cpf } = req.body

        if (!nome || !cpf) {
            errorCode = 422
            throw new Error('Checar informações.')
        }

        const contaUser: conta | undefined = contas.find((item) => item.cpf === cpf && item.nome === nome)
        if (!contaUser) {
            errorCode = 404
            throw new Error('Conta não existe.')
        }

        const saldoConta = {
            saldo: contaUser.saldo
        }
        res.status(200).send(saldoConta)

    } catch {
        res.status(errorCode).send(Error)
    }
})

app.put('/saldo', (req, res) => {
    let errorCode: number = 400
    try {
        const { nome, cpf, valor } = req.body
        if (!nome || !cpf || !valor || typeof valor !== 'number') {
            errorCode = 422
            throw new Error('Checar informações.')
        }

        const contaUser: conta | undefined = contas.find((item) => item.cpf === cpf && item.nome === nome)
        if (!contaUser) {
            errorCode = 404
            throw new Error('Conta não existe.')
        }

        const novaContaUser = { ...contaUser, saldo: contaUser.saldo + valor }
        res.status(200).send(novaContaUser)

    } catch {
        res.status(errorCode).send(Error)
    }
})

app.put('/pagamento', (req, res) => {
    let errorCode: number = 400
    try {
        const { valor, descricao, data } = req.body
        if (!descricao || !valor || typeof valor !== 'number' || typeof descricao !== 'string') {
            errorCode = 422
            throw new Error('Checar informações.')
        }
        if (data && typeof data !== 'string') {
            errorCode = 422
            throw new Error('Checar informações.')
        }
        let dd1 = data.split('/')[0]
        let mm1 = data.split('/')[1]
        let aaaa1 = data.split('/')[2]
        let dataPagamento: Date | string = mm1 + '/' + dd1 + '/' + aaaa1
        dataPagamento = new Date(dataPagamento)

        let hoje: Date | string = new Date();
        let dd = String(hoje.getDate()).padStart(2, '0')
        let mm = String(hoje.getMonth() + 1).padStart(2, '0')
        let aaaa = hoje.getFullYear()
        let dataHoje = dd + '/' + mm + '/' + aaaa
        let dataIngles = mm + '/' + dd + '/'+ aaaa
        
        if (new Date(dataPagamento).getTime() < new Date(dataIngles).getTime()) {
            errorCode = 422
            throw new Error('Data inválida.')
        }
        
        if (!data) {
            let novoPagamento = {
                valor,
                descricao,
                data: dataHoje
            }
            res.send(novoPagamento).status(200)
        } else {
            let novoPagamento = {
                valor,
                descricao,
                data
            }
            res.send(novoPagamento).status(200)
        }
    } catch {
        res.status(errorCode).send(Error)
    }
})


