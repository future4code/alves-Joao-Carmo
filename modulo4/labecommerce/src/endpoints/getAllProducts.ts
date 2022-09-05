import { Request, Response } from "express"
import selectAllProducts from "../data/selectAllProducts"
import selectOrderedProductsSearchName from "../data/selectOrderedProductsSearchName"

export const getAllProducts = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        let order = req.query.order as string
        let search = req.query.search as string

        if (order && (order !== 'asc' && order !== 'desc')) {
            throw new Error('Invalid order.')
        }

        if (order) {
            order = order.toLocaleUpperCase() === "DESC" ? "DESC" : "ASC"
        }
        
        if (!order && !search) {
            const products = await selectAllProducts()
            res.status(200).send(products)
        } else {
            const products = await selectOrderedProductsSearchName(order, search)
            res.status(200).send(products)
        }
    } catch (err: any) {
        res.send(err.message).status(404)
    }
}