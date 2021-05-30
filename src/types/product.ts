export type Product = {
    productId: number,
    productName: string,
    stars: number,
    imageUrl: string,
    listPrice: number,
    price: number,
    installments: Installments[]
}

export type Installments = {
    quantity: number,
    value: any
}