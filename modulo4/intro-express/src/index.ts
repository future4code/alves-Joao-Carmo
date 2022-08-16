import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})


type user = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

const users: user[] = [
    {
        id: 1,
        name: "Leanne",
        phone: "1-770-736-8031",
        email: "Sincere@april.biz",
        website: "hildegard.org"
    },
    {
        id: 2,
        name: "Ervin",
        phone: "010-692-6593",
        email: "Shanna@melissa.tv",
        website: "anastasia.net"
    },
    {
        id: 3,
        name: "Clementine",
        phone: "1-463-123-4447",
        email: "Nathan@yesenia.net",
        website: "ramiro.info"
    },
    {
        id: 4,
        name: "Patricia",
        phone: "493-170-9623",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz"
    }
]

app.get('/users', (req, res) => {
    res.send(users)
})

type post = {
    id: number,
    userId: number,
    title: string,
    body: string
}

const posts: post[] = [
    {
        id: 1,
        userId: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        userId: 2,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        userId: 2,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
]

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.get('/posts/:userId', (req, res) => {
    const userPosts = posts.filter((item) => {
        return item.userId === Number(req.params.userId)
    })
    res.send(userPosts)
})

app.delete('/posts/:id', (req, res) => {
})

app.delete('/users/:id', (req, res) => { 
})