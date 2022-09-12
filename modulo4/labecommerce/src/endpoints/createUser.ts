import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"
import insertUser from "../data/insertUser"
import { user } from "../types"

export const createUser = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            throw new Error('Invalid name, email or password.')
        }
        const users: user[] = await selectAllUsers()
        let id:string = (users.length + 1).toString()

        await insertUser(id, name, email, password)

        res.status(201).send('User created successfully.')

    } catch (err: any) {
        res.send(err.message).status(400)
    }
}