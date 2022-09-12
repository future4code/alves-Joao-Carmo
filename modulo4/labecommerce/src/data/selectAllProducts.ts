import connection from "./connection";

export default async function selectAllProducts(): Promise<any> {
    const result = await connection('labecommerce_products')
        .select()

    return result
}