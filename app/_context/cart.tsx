import { Product } from "@prisma/client"
import { createContext } from "react"

interface CartProduts extends Product {
    quantity: number
}

interface ICartContext  {
    products: CartProduts[]
}

export const CartContext = createContext<ICartContext>({
    products: []
})