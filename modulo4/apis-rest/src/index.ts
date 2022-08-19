import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number

}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

// Exercicio 1 
// Método get, a entidade é a lista de users
// Exercicio 3
// query params 

app.get('/users', (req, res) => {
    let codeError: number = 400
    try {
        const name: string = req.query.name as string
        const user: user | undefined = users.find((item) => {
            return item.name === name
        })
        if (!user) {
            codeError = 404
            throw new Error('User not found')
        }
        res.send(user).status(200)
    } catch {
        res.status(codeError).send(Error)
    }
})

// Exercicio 2
// Utilizando path params

app.get('/users/:type', (req, res) => {
    let codeError: number = 400
    try {
        const type: string = req.params.type as string
        const typeUsers = users.filter((item) => {
            return item.type === type.toUpperCase()
        })
        if (!type || type !== "admin" && type !== "normal") {
            codeError = 404
            throw new Error('Users type not found')
        }
        res.send(typeUsers).status(200)
    } catch {
        res.status(codeError).send(Error)
    }

})

// Exercicio 4
// Ao trocar para put, o endpoint deve receber algum parametro para saber qual user está sendo alterado.
// Não é apropriado pois o método PUT somente altera um dado ja existente na API.

app.post('/users', (req, res) => {
    let codeError: number = 400
    try {
        const { id, name, email, type, age } = req.body

        if (!id || !name || !email || !type || !age) {
            codeError = 422
            throw new Error('Check body fields.')
        }
        const newUser: user = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(201).send('User created successfully.')
    } catch {
        res.status(codeError).send(Error)
    }
})

// Exercicio 5

app.put('/users/:id', (req, res) => {
    let codeError: number = 400
    try {
        const id: number = Number(req.params.id)
        const {name} = req.body
        users.forEach(function (item) {
            if (item.id === id) {
                item.name = name + '-ALTERADO'
            }
        })
        if (!name) {
            codeError = 422
            throw new Error('Check body fields.')
        }
        if ( id > users.length) {
            codeError = 404
            throw new Error('Invalid id.')
        }
        res.status(200).send('Name altered successfully')
    } catch {
        res.status(codeError).send(Error)
    }
})

// Exercicio 6 

app.patch('/users/:id', (req, res) => {
    let codeError: number = 400
    try {
        const id: number = Number(req.params.id)
        const {name} = req.body
        users.forEach(function (item) {
            if (item.id === id) {
                item.name = name + '-REALTERADO'
            }
        })
        if (!name) {
            codeError = 422
            throw new Error('Check body fields.')
        }
        if ( id > users.length) {
            codeError = 404
            throw new Error('Invalid id.')
        }
        res.status(200).send('Name realtered successfully')
    } catch {
        res.status(codeError).send(Error)
    }
})

// Exercicio 7

app.delete('/users/:id', (req, res) => {
    let codeError: number = 400
    try {
        const id: number = Number(req.params.id)
        const newUsers = users.filter((item) => {
            return item.id !== id
        })
        if ( id > users.length) {
            codeError = 404
            throw new Error('Invalid id.')
        }
        res.status(204)
    } catch {
        res.status(codeError).send(Error)
    }
})


