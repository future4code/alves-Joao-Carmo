import { Request, Response } from "express"
import insertPurchase from "../data/insertPurchase"
import selectAllPurchases from "../data/selectAllPurchases"
import selectProductPrice from "../data/selectProductPrice"
import { product } from "../types"

export const createPurchase = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) {
            throw new Error('Invalid user_id, product_id or quantity.')
        }
        const purchases = await selectAllPurchases()
        let id:string = (purchases.length + 1).toString()

        const product = await selectProductPrice(product_id)
        let total_price = product[0].price * quantity

        await insertPurchase(id, user_id, product_id, quantity, total_price)
        
        res.status(201).send('Purchase registered successfully.')

    } catch (err: any) {
        res.send(err.message).status(400)
    }
}