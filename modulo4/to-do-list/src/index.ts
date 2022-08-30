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


const getAllUsers = async (): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM TodoListUser`)
    return result[0]
}

const getAllTasks = async (): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM TodoListTask`)
    return result[0]
}

const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM TodoListUser WHERE id = "${id}"`)
    return result[0][0]
}

const searchUser = async (query: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT id, nickname FROM TodoListUser WHERE nickname LIKE "%${query}%" OR email LIKE "%${query}%"`)
    return result[0]
}

const getTaskById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT TodoListTask.id, title, description, status, limit_date, creator_user_id, nickname  FROM TodoListTask 
    INNER JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id
    WHERE TodoListTask.id = ${id}`)
    return result[0][0]
}

const getTaskByUserId = async (userId: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT TodoListTask.id, title, description, status, limit_date, creator_user_id, nickname  FROM TodoListTask 
    INNER JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id
    WHERE TodoListUser.id = ${userId}`)
    return result[0]
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

const addResponsibleForTask = async (taskId: string, responsibleUserId: string): Promise<any> => {
    await connection.raw(`
    INSERT INTO TodoListResponsibleUserTaskRelation VALUES ("${taskId}", "${responsibleUserId}")`)
}

const getResponsibleForTask = async (taskId: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT TodoListUser.id, nickname FROM TodoListUser
    INNER JOIN TodoListResponsibleUserTaskRelation ON TodoListResponsibleUserTaskRelation.responsible_user_id = TodoListUser.id
    WHERE TodoListResponsibleUserTaskRelation.task_id = ${taskId} `)
    return result[0]
}

const updateTaskStatus = async (status: string, id: string): Promise<any> => {
    await connection.raw(`
    UPDATE TodoListTask SET status = "${status}" WHERE id = ${id}`)
}

const getTasksByStatus = async (status: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT *  FROM TodoListTask 
    INNER JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id
    WHERE TodoListTask.status = "${status}"`)
    return result[0]
}

//  1. CRIA USUÁRIO
app.post("/user", async (req, res) => {
    let codeError = 400
    try {
        const { name, nickname, email } = req.body
        if (!name || !nickname || !email) {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }
        const result = await getAllUsers()
        const id = result.length + 1

        await createUser(id, name, nickname, email)
        res.status(201).send("User created.")
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// 6. Pega todos os usuários
app.get("/user/all", async (req, res) => {
    let codeError = 400
    try {
        const result = await getAllUsers()
        res.status(200).send(result)
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// 2. PEGA USUÁRIO POR ID
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

// 3. EDITA USUÁRIO
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

// 4. CRIA TAREFA
app.post("/task", async (req, res) => {
    let codeError = 400
    try {
        const { title, description, limitDate, creatorUserId } = req.body
        if (!title || !description || !limitDate || !creatorUserId) {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }
        const result = await getAllTasks()
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

// 13. Pega todas as tarefas por status
app.get("/task/search", async (req, res) => {
    let codeError = 400
    try {
        const status = req.query.status as string
        console.log(status)
        
        if (status === "" || !status) {
            codeError = 404
            throw new Error("Something went wrong. Please check url params.")
        }

        const result = await getTasksByStatus(status)
        let tasks = []
        tasks.push(result)
        tasks = tasks.flat(2)

        const newTasks = tasks.map((item) => {
            let formatLimitDate: Date | string = new Date(item.limit_date)
            formatLimitDate = formatLimitDate.toLocaleDateString()
            let newItem = {
                taskId: item.id,
                title: item.title,
                description: item.description,
                limitDate: formatLimitDate,
                creatorUserId: item.creator_user_id,
            }
            return newItem
        })

        console.log(result)
        res.status(200).send({
            tasks: newTasks
        })

    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// 5. PEGA TAREFA PELO ID
app.get("/task/:id", async (req, res) => {
    let codeError = 400
    try {
        const { id } = req.params
        const result = await getTaskById(id)
        let formatLimitDate: Date | string = new Date(result.limit_date)
        formatLimitDate = formatLimitDate.toLocaleDateString()
        console.log(result)
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

// 7. Pega tarefas criada por um usuário
app.get("/task", async (req, res) => {
    let codeError = 400
    try {
        const creatorUserId = req.query.creatorUserId as string
        if (!creatorUserId) {
            codeError = 404
            throw new Error("Something went wrong. Please check url params.")
        }

        let tasks = []
        const result = await getTaskByUserId(creatorUserId)
        tasks.push(result)
        tasks = tasks.flat(2)
        const newTasks = tasks.map((item) => {
            let formatLimitDate: Date | string = new Date(item.limit_date)
            formatLimitDate = formatLimitDate.toLocaleDateString()
            let newItem = {
                taskId: item.id,
                title: item.title,
                description: item.description,
                limitDate: formatLimitDate,
                creatorUserId: item.creator_user_id,
                status: item.status,
                creatorUserNickname: item.nickname
            }

            return newItem
        })
        res.status(200).send({
            tasks: newTasks
        })

    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// 8. Pesquisa usuário
app.get("/user", async (req, res) => {
    let codeError = 400
    try {
        const query = req.query.query as string
        if (!query) {
            codeError = 404
            throw new Error("Something went wrong. Please check url params.")
        }
        const result = await searchUser(query)
        let users = []
        users.push(result)
        users = users.flat(2)
        res.status(200).send({
            users
        })

    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})


// 9. Atribui um usuário responsável a uma tarefa
app.post("/task/responsible", async (req, res) => {
    let codeError = 400
    try {
        const { task_id, responsible_user_id } = req.body
        if (!task_id || !responsible_user_id || task_id === "" || responsible_user_id === "") {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }

        await addResponsibleForTask(task_id, responsible_user_id)

        res.status(201).send({
            message: 'Responsible added successfully'
        })
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// 10. Pega usuários responsáveis por uma tarefa
app.get("/task/:id/responsible", async (req, res) => {
    let codeError = 400
    try {
        const { id } = req.params
        if (!id) {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }

        const result = await getResponsibleForTask(id)
        console.log(result)
        if (result.length <= 0) {
            codeError = 404
            throw new Error("No tasks found")
        }

        res.status(200).send({
            users: result
        })
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// 11. Pega tarefa pelo id e seus responsáveis
app.get("/task/:id/responsiblesTask", async (req, res) => {
    let codeError = 400
    try {
        const { id } = req.params
        if (!id) {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }

        const resultResponsible = await getResponsibleForTask(id)
        const resultTask = await getTaskById(id)
        if (!resultTask) {
            codeError = 404
            throw new Error("No tasks found")
        }
        
        let task = []
        task.push(resultTask)
        task = task.flat(2)
        const newTask = task.map((item) => {
            let formatLimitDate: Date | string = new Date(item.limit_date)
            formatLimitDate = formatLimitDate.toLocaleDateString()
            let newItem = {
                taskId: item.id,
                title: item.title,
                description: item.description,
                limitDate: formatLimitDate,
                creatorUserId: item.creator_user_id,
                creatorUserNickname: item.nickname,
                responsibleUsers: resultResponsible
            }
            return newItem
        })

        res.status(200).send(newTask[0])
        
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// 12. Atualiza o status da tarega pelo id
app.put("/task/status/:id", async (req, res) => {
    let codeError = 400
    try {
        const { status } = req.body
        const { id } = req.params

        if (!status || status === "" || !id || id === "") {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }
        const resultTask = await getTaskById(id)
        if (!resultTask) {
            codeError = 404
            throw new Error("No tasks found")
        }

        await updateTaskStatus(status, id)
        
        res.status(200).send({
            message: "Task status updated"
        })
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

