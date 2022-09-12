import { Request, Response } from "express"
import selectUserPurchases from "../data/selectUserPurchases"

export const getUserPurchases = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        const user_id = req.params.user_id

        const purchases = await selectUserPurchases(user_id)
        if (purchases.length === 0) {
            res.status(200).send('This user has no purchases.')
        }
        res.status(200).send(purchases)

    } catch (err: any) {
        res.send(err.message).status(404)
    }
}