import connection from "./connection";

export default async function selectUserPurchases(
    user_id: string
): Promise<any> {
    const result = await connection("labecommerce_purchases")
        .where("user_id", user_id)
    return result
}