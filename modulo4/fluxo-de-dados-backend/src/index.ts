import express from "express";
import cors from "cors";
import arrayObj from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get('/test', (req, res) => {
    res.send("API funciona.")
})

app.post('/products', (req, res) => {
    try {
        if ( !JSON.stringify(req.body.name) || !JSON.stringify(req.body.price) ) {
            throw new Error()
        }

        if ( (req.body.name && typeof req.body.name !== "string") || (req.body.price && typeof req.body.price !== "number") ) {
            throw new Error('Wrong types')
        }
        
        const newProduct = { ...req.body, id: arrayObj.length + 1 }
        arrayObj.push(newProduct)
        res.send(arrayObj)
        res.status(200).end()
    } catch {
        res.status(422).send(Error).end()
    }
})

app.get('/products', (req, res) => {
    res.send(arrayObj)
})

app.put('/products/:id' , (req, res) => {
    try {
        if ( !JSON.stringify(req.body.price) ){
            throw new Error()
        }

        arrayObj.forEach((item) => {
            if (item.id === req.params.id) {
                item.price = req.body.price
            }
        })
        res.send(arrayObj).status(200)

    } catch {
        res.status(422).send('Informações inválidas').end()
    }
})

app.delete('/products/:id' , (req, res) => {
    try {
        const productIds = arrayObj.map((item) => {
            return item.id
        })
        if ( !productIds.includes(req.params.id)) {
            throw new Error()
        }

        const newArrayObj = arrayObj.filter((item) => {
            return item.id !== req.params.id
        })
        res.send(newArrayObj)
    } catch {
        res.status(404).send('Pruduto inválido').end()
    }
})

