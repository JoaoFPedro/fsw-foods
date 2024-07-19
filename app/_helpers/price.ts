import { Product } from "@prisma/client";

const calculatedProductTotalPrice = (product: Product) => {
    if(product.discountPercentage === 0 ){
        return Number(product.price)
    }

    const discount = Number(product.price) * (product.discountPercentage/100)
    
    return Number(product.price )- discount
}