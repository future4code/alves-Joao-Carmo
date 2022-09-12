import { Request, Response } from "express"
import { connection } from "../data/connection"

export default async function selectUserByName(query: string): Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       WHERE name LIKE "%${query}%"
    `)

    return result[0]
}

export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name as string
        const users = await selectUserByName(name)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error) {
        if(error instanceof Error) {
            console.log(error)
            res.send(error.message)
        }
    }
}