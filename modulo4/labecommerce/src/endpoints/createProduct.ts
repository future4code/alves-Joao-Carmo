import { Request, Response } from "express"
import selectAllProducts from "../data/selectAllProducts"
import insertProduct from "../data/insertProduct"
import { product } from "../types"

export const createProduct = async (
    req: Request, res: Response
): Promise<void> => {
    try {
        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            throw new Error('Invalid name, price or image_url.')
        }
        const products:product[] = await selectAllProducts()
        let id: string = (products.length + 1).toString()

        await insertProduct(id, name, price, image_url)

        res.status(201).send('Product created successfully.')

    } catch (err: any) {
        res.send(err.message).status(400)
    }
}