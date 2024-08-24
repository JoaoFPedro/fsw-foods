"use client";
import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

export interface CartProduts extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduts[];
  addProductToCart: (product: Product, quantity: number) => void;
  decreseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  clearProductQuantity: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  addProductToCart: () => {},
  decreseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  clearProductQuantity: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduts[]>([]);

  const addProductToCart = (product: Product, quantity: number) => {
    // Verifica se o produto já está no carrinho
    const isProductAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (isProductAlreadyOnCart) {
      // Atualiza a quantidade do produto existente no carrinho
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          }
          return cartProduct;
        }),
      );
      return;
    }
    // Adiciona um novo produto ao carrinho com a quantidade especificada
    setProducts((prev) => [...prev, { ...product, quantity: quantity }]);
  };

  const decreseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          if (cartProduct.quantity === 1) {
            return cartProduct;
          }
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        }
        return cartProduct;
      }),
    );
    return;
  };
  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        return cartProduct;
      }),
    );
    return;
  };
  const clearProductQuantity = (productId: string) => {
    setProducts((prev) => prev.filter((products) => products.id != productId))
  };


  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreseProductQuantity,
        increaseProductQuantity,
        clearProductQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
