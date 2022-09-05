import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"
import selectUserPurchases from "../data/selectUserPurchases"

export const getAllUsers = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        const users = await selectAllUsers()
        let newUsers = []
        for (let i = 0; i < users.length; i++) {
            const purchases = await selectUserPurchases(users[i].id)
            users[i] = {...users[i], purchases: purchases}
            newUsers.push(users[i])
        }
        res.status(200).send(newUsers)
    } catch (err: any) {
        res.send(err.message).status(404)
    }
}