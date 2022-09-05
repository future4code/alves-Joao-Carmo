import connection from "./connection";

export default async function insertProduct(
    id: string,
    name: string,
    price: number,
    image_url: string
): Promise<any> {
    await connection
        .insert({id, name, price, image_url})
        .into('labecommerce_products')
}