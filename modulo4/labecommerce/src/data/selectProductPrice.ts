import connection from "./connection";

export default async function selectProductPrice(
    id: string
): Promise<any> {
    const result = await connection('labecommerce_products')
        .where("id", id)

    return result
}