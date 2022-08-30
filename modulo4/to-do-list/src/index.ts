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

const searchTask = async (query: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT TodoListTask.id, title, description, status, limit_date, creator_user_id, nickname  FROM TodoListTask 
    INNER JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id
    WHERE title LIKE "%${query}%" OR description LIKE "%${query}%"`)
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

const createUser = async (id: string, name: string, nickname: string,  email: string): Promise<any> => {
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

const getDelayedTasks = async (): Promise<any> => {
    const result = await connection.raw(`
    SELECT TodoListTask.id, title, description, limit_date, creator_user_id, nickname  FROM TodoListTask 
    INNER JOIN TodoListUser ON TodoListTask.creator_user_id = TodoListUser.id`)
    return result[0]
}

const removeResponsibleForTask = async (taskId: string, responsibleUserId: string): Promise<any> => {
    await connection.raw(`
    DELETE FROM TodoListResponsibleUserTaskRelation WHERE responsible_user_id = "${responsibleUserId}" AND task_id = "${taskId}"
    `)
}

const deleteTask = async (taskId: string): Promise<any> => {
    await connection.raw(`
    DELETE FROM TodoListResponsibleUserTaskRelation WHERE task_id = ${taskId}`)
    await connection.raw(`
    DELETE FROM TodoListTask WHERE id = ${taskId}`)
}

const deleteUser = async (userId: string): Promise<any> => {
    let tasks = []
        const result = await getTaskByUserId(userId)
        tasks.push(result)
        tasks = tasks.flat(2)
        for (let i = 0; i < tasks.length; i++) {
            await connection.raw(`
            DELETE FROM TodoListResponsibleUserTaskRelation WHERE task_id = "${tasks[i].id}"`)
        }
    
    await connection.raw(`
    DELETE FROM TodoListResponsibleUserTaskRelation WHERE responsible_user_id = ${userId}`)
    await connection.raw(`
    DELETE FROM TodoListTask WHERE creator_user_id = ${userId}`)
    await connection.raw(`
    DELETE FROM TodoListUser WHERE id = ${userId}`)
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
        let id
        if ( result.length > 0 ) {
            id = (Number(result[result.length-1].id) + 1).toString()
        } else {
            id = "1"
        }

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
        let id
        if ( result.length > 0 ) {
            id = (Number(result[result.length-1].id) + 1).toString()
        } else {
            id = "1"
        }
        let formatLimitDate: Date = limitDate.split("/").reverse().join("-")

        await createTask(id, title, description, formatLimitDate, creatorUserId)
        res.status(200).send("Task created successfully")

    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// 14. Pega todas as tarefas atrasadas
app.get("/task/delayed", async (req, res) => {
    let codeError = 400
    try {
        const result = await getDelayedTasks()
        let tasks = []
        tasks.push(result)
        tasks = tasks.flat(2)
        const delayedTasks = tasks.filter((item) => {
            let formatLimitDate: Date | string = new Date(item.limit_date)
            let today = new Date()
            return formatLimitDate.getTime() < today.getTime()
        }).map((item) => {
            let formatLimitDate: Date | string = new Date(item.limit_date)
            formatLimitDate = formatLimitDate.toLocaleDateString()

            let newItem = {
                taskId: item.id,
                title: item.title,
                description: item.description,
                limitDate: formatLimitDate,
                creatorUserId: item.creator_user_id,
                creatorUserNickname: item.nickname
            }
            return newItem
        })

        res.status(200).send({
            tasks: delayedTasks
        })
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

// 7. E 17. Pega tarefas criada por um usuário e procura tarefas por query
app.get("/task", async (req, res) => {
    let codeError = 400
    try {
        if (!req.query.query && !req.query.creatorUserId) {
            codeError = 404
            throw new Error("Something went wrong. Please check url params.")
        }

        if (req.query.creatorUserId) {
            const creatorUserId = req.query.creatorUserId as string
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
        }

        if (req.query.query) {
            const query = req.query.query as string

            const result = await searchTask(query)
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
                    creatorUserNickname: item.nickname
                }
                return newItem

            })
            res.status(200).send({
                tasks: newTasks
            })
        }

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
        const { task_id, responsible_user_id, responsible_user_ids } = req.body
        if (!task_id || task_id === "") {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }

        if ((!responsible_user_id || responsible_user_id === "") && (!responsible_user_ids || responsible_user_ids.length === 0)) {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")

        }

        const responsibleForTask = await getResponsibleForTask(task_id)
        let users = []
        users.push(responsibleForTask)
        users = users.flat(2)
        const checkResponsibleUserId = users.find(item => item.id === responsible_user_id || responsible_user_ids.includes(item.id))
        if (checkResponsibleUserId) {
            codeError = 404
            throw new Error("User(s) already responsible for task.")
        }

        if (responsible_user_id && !responsible_user_ids) {
            await addResponsibleForTask(task_id, responsible_user_id)
        }

        if (!responsible_user_id && responsible_user_ids) {
            for (let i = 0; i < responsible_user_ids.length; i++) {
                await addResponsibleForTask(task_id, responsible_user_ids[i])
            }
        }

        res.status(201).send({
            message: 'Responsible user(s) added successfully'
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

// 12. e 18. Atualiza o status de várias tarefas
app.put("/task/status/edit", async (req, res) => {
    let codeError = 400
    try {
        const { task_ids, status } = req.body
        if (!status || status === "" || !task_ids || task_ids.length <= 0) {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }

        for (let i = 0; i < task_ids.length; i++) {
            const checkTask = await getTaskById(task_ids[i])
            if (!checkTask) {
                codeError = 404
                throw new Error("A task was not found. Please check informations.")
            }
        }

        for (let i = 0; i < task_ids.length; i++) {
            await updateTaskStatus(status, task_ids[i])
        }

        res.status(200).send({
            message: "Task(s) status updated"
        })
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})
// 12. Atualiza o status da tarega pelo id
// app.put("/task/status/:id", async (req, res) => {
//     let codeError = 400
//     try {
//         const { status } = req.body
//         const { id } = req.params

//         if (!status || status === "" || !id || id === "") {
//             codeError = 404
//             throw new Error("Something went wrong. Please check informations.")
//         }
//         const resultTask = await getTaskById(id)
//         if (!resultTask) {
//             codeError = 404
//             throw new Error("No tasks found")
//         }

//         await updateTaskStatus(status, id)

//         res.status(200).send({
//             message: "Task status updated"
//         })
//     } catch (err: any) {
//         res.status(codeError).send({
//             message: err.message,
//         })
//     }
// })

// 15. Retirar um usuário responsável de uma tarefa
app.delete("/task/:taskId/responsible/:responsibleUserId", async (req, res) => {
    let codeError = 400
    try {
        const { taskId, responsibleUserId } = req.params
        if (!taskId || !responsibleUserId) {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }
        const task = await getTaskById(taskId)
        if (!task) {
            codeError = 404
            throw new Error("Task not found.")
        }
        const user = await getUserById(responsibleUserId)
        if (!user) {
            codeError = 404
            throw new Error("User not found.")
        }

        const responsibleForTask = await getResponsibleForTask(taskId)
        let users = []
        users.push(responsibleForTask)
        users = users.flat(2)
        const checkResponsibleUserId = users.find(item => item.id === responsibleUserId)
        if (!checkResponsibleUserId) {
            codeError = 404
            throw new Error("User not responsible for task.")
        }

        await removeResponsibleForTask(taskId, responsibleUserId)

        res.send({
            message: "Responsible for task removed successfully."
        })
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// 19. Deleta tarefa
app.delete("/task/:id", async (req, res) => {
    let codeError = 400
    try {
        const { id } = req.params
        if (!id || id === "") {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }
        const task = await getTaskById(id)
        if (!task) {
            codeError = 404
            throw new Error("Task not found.")
        }

        await deleteTask(id)
        res.send({
            message: "Task deleted successfully."
        })
    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

// 20. Deletar usuário
app.delete("/user/:id", async (req, res) => {
    let codeError = 400
    try {
        const { id } = req.params
        if (!id || id === "") {
            codeError = 404
            throw new Error("Something went wrong. Please check informations.")
        }
        const user = await getUserById(id)
        if (!user) {
            codeError = 404
            throw new Error("User not found.")
        }
        // let tasks = []
        // const result = await getTaskByUserId(id)
        // tasks.push(result)
        // tasks = tasks.flat(2)
        // for (let i = 0; i < tasks.length; i++) {
        //     await connection.raw(`
        //     DELETE FROM TodoListResponsibleUserTaskRelation WHERE task_id = "${tasks[i]}"`)
        // }
        await deleteUser(id)

        res.send({
            message: "User deleted successfully."
        })

    } catch (err: any) {
        res.status(codeError).send({
            message: err.message,
        })
    }
})

