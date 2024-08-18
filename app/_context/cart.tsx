"use client"
import { Product } from "@prisma/client"
import { createContext, ReactNode, useState } from "react"

interface CartProduts extends Product {
    quantity: number
}

interface ICartContext  {
    products: CartProduts[]
    addProductToCart: (product: Product) => void
}

export const CartContext = createContext<ICartContext>({
    products: [],
    addProductToCart: () => {},
})

export const CartProvider = ({children}: {children: ReactNode}) =>{
    const [products, setProducts] = useState<CartProduts[]>([])
    
    const addProductToCart = (product: Product) =>{
        setProducts((prev) => [...prev, {...product, quantity: 0}])
    }

    return (
        <CartContext.Provider value={{products, addProductToCart}}>
            {children}
        </CartContext.Provider>
    )
}