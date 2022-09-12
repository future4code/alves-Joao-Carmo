import connection from "./connection";

export default async function selectAllPurchases(): Promise<any> {
    const result = await connection('labecommerce_purchases')
        .select()

    return result
}