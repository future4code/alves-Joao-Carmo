import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get('/ping', (req, res) => {
    res.send('pong')
})

type todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const todos: todo[] = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
    },
    {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    },
]

app.get('/todos/completed', (req, res) => {
    const completedTodos = todos.filter((item) => {
        return item.completed === true
    })
    res.send(completedTodos)
})

app.get('/todos/uncompleted', (req, res) => {
    const uncompletedTodos = todos.filter((item) => {
        return item.completed === false
    })
    res.send(uncompletedTodos)
})

app.post('/todos', (req, res) => {
    const newRes = {...req.body, id: todos.length + 1}
    todos.push(newRes)
    res.send(todos) 
})

app.put('/todos/:id', (req, res) => {
    todos.forEach(function(item){
        if (item.id === Number(req.params.id)) {
           item.completed = !item.completed
        }
    })
    res.send(todos)
})

app.delete('/todos/:id', (req, res) => {
    const newTodos = todos.filter((item) => {
        return item.id !== Number(req.params.id)
    })
    res.send(newTodos)
})

app.get('/todos/:userId', (req, res) => {
    const userTodos = todos.filter((item => {
        return item.userId === Number(req.params.userId)
    }))
    const othersTodos = todos.filter((item) => {
        return item.userId !== Number(req.params.userId)
    })
    res.send({
        todos: {
            selectedUser: userTodos,
            others: othersTodos
        }
    })
})