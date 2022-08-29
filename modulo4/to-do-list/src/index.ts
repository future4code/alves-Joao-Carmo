import express, { Express } from 'express'
import cors from 'cors'
import knex from 'knex';
import dotenv from 'dotenv'
import { AddressInfo } from "net";
dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(cors())

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
})
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});


const getUser = async (): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM TodoListUser`)
    return result[0]
}

const getTask = async (): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM TodoListTask`)
    return result[0]
}

const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM TodoListUser WHERE id = "${id}"`)
    return result[0][0]
}

const getTaskById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM TodoListTask 
    INNER JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id
    WHERE TodoListTask.creator_user_id = "${id}"`)
    return result[0][0]
}

const updateUser = async (id: string, name?: string, email?: string, nickname?: string): Promise<any> => {
    await connection("TodoListUser")
        .update({
            name,
            email,
            nickname,
        })
        .where("id", id)
}

const createUser = async (id: string, name: string, email: string, nickname: string): Promise<any> => {
    await connection.raw(`
    INSERT INTO TodoListUser VALUES ("${id}", "${name}", "${nickname}", "${email}" )`)
}

const createTask = async (id: string, title: string, description: string, limitDate: Date, creatorUserId: string): Promise<any> => {
    await connection.raw(` 
    INSERT INTO TodoListTask VALUES ("${id}", "${title}", "${description}", status, "${limitDate}", "${creatorUserId}")`)
}

// CRIA USUÁRIO
app.post("/user", async (req, res) => {
    let codeError = 400
    try {
        const { name, nickname, email } = req.body
        if (!name || !nickname || !email) {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }
        const result = await getUser()
        const id = result.length + 1

        await createUser(id, name, nickname, email)
        res.status(201).send("User created.")
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// PEGA USUÁRIO POR ID
app.get("/user/:id", async (req, res) => {
    let codeError = 400
    try {
        const { id } = req.params
        const result = await getUserById(id)
        if (!result) {
            codeError = 404
            throw new Error("Invalid id.")
        }
        res.status(200).send({
            id: result.id,
            nickname: result.nickname
        })
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// EDITA USUÁRIO
app.put("/user/edit/:id", async (req, res) => {
    let codeError = 400
    try {
        const { name, nickname, email } = req.body
        const { id } = req.params
        if (name === "" || nickname === "" || email === "") {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }

        await updateUser(id, name, nickname, email)
        res.status(200).send("User updated.")
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// CRIA TAREFA
app.post("/task", async (req, res) => {
    let codeError = 400
    try {
        const { title, description, limitDate, creatorUserId } = req.body
        if (!title || !description || !limitDate || !creatorUserId) {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }
        const result = await getTask()
        const id = result.length + 1
        let formatLimitDate: Date = limitDate.split("/").reverse().join("-")

        await createTask(id, title, description, formatLimitDate, creatorUserId)
        res.status(200).send("Task created successfully")

    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// PEGA TAREFA PELO ID
app.get("/task/:id", async (req, res) => {
    let codeError = 400
    try {
        const { id } = req.params
        const result = await getTaskById(id)
        let formatLimitDate: Date | string = new Date(result.limit_date)
        formatLimitDate = formatLimitDate.toLocaleDateString()
        res.status(200).send({
            taskId: result.id,
            title: result.title,
            description: result.description,
            limitDate: formatLimitDate,
            status: result.status,
            creatorUserId: result.creator_user_id,
            creatorUserNickname: result.nickname
        })

    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})