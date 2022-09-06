## Exercício 1
### a)
get("/subscribers")

### b)
    Promise<any[]>

### c)
    async function getSubscribers(): Promise<any[]> {
        const response = await axios.get(https://labenews.herokuapp.com/    subscribers)
        return response.data
    }

## Exercício 2
### a)
A arrow function é declarada como uma variável.

### b)
    const getSubscribers = async (): Promise<any[]> => {
        const response = await axios.get(https://labenews.herokuapp.com/subscribers)
        return response.data
    }

## Exercício 3
### a)
A response continua como "any".

### b)
O mapeamento nos permite organizar a resposta do jeito que quisermos.

### c) 
    const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
        return {
        id: res.id,
        name: res.name,
        email: res.email,
        }
    })
    }

## Exercício 4
### a)
    Promise<void>, pois ela não tem retorno.

### b)
    const createNews = async (title: string, content: string, date: number): Promise<void> => {
    const body = {
        title,
        content,
        date
    }
    await axios.put(`${baseURL}/news`, body)
    }

## Exercício 5
    const sendNotifications = async (
    users: user[],
    message: string
    ): Promise<void> => {

    try {
            for (const user of users) {
            await axios.post(`${baseUrl}/notifications`, {
            subscriberId: user.id,
            message
            })
        }

        console.log("All notifications sent")
        } catch {
            console.log("Error")
        }
    }

## Exercício 6
### a)
Promise.all permite responder várias requisições ao mesmo tempo.

### b)
Não precisa esperar as respostas e fazer cada usuário 1 por 1, caso tenham muitos usuários esse método perde eficiencia. Sendo melhor utilizar Promises.all para fazer tudo ao mesmo tempo.

### c)
    const sendNotifications = async (
    users: user[],
    message: string
    ): Promise<void> => {

        try {
        const promises = users.map(user =>{
            return axios.post(`${baseUrl}/notifications`, {
            subscriberId: user.id,
            message: message,
            })
        })
        
        await Promise.all(promises)

        } catch {
            console.log("Error")
        }
    }