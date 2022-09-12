import connection from "./connection";

export default async function selectOrderedProductsSearchName(
    order?: string,
    search?: string
): Promise<any> {
    if (order && search) {
        const result = await connection('labecommerce_products')
            .where("name", "LIKE", `%${search}%`)
            .orderBy("name", order)
        return result
    } else if (order && !search) {
        const result = await connection('labecommerce_products')
            .orderBy("name", order)
        return result
    } else if (!order && search) {
        const result = await connection('labecommerce_products')
            .where("name", "LIKE", `%${search}%`)
        return result
    }
}