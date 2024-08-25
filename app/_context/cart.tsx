"use client";
import { Product } from "@prisma/client";
import { createContext, ReactNode, useMemo, useState } from "react";
import { calculatedProductTotalPrice } from "../_helpers/price";

export interface CartProduts extends Product {
  quantity: number;
}

interface ICartContext {
  products: CartProduts[];
  addProductToCart: (product: Product, quantity: number) => void;
  decreseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  clearProductQuantity: (productId: string) => void;
  totalPrice: number
  subTotalPrice: number
  totalDiscounts: number
}

export const CartContext = createContext<ICartContext>({
  products: [],
  addProductToCart: () => {},
  decreseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  clearProductQuantity: () => {},
  totalPrice: 0,
  subTotalPrice: 0,
  totalDiscounts: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduts[]>([]);

  const subTotalPrice = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.price) * product.quantity
    },0)
  },[products])

  const totalPrice = useMemo(() => {
    return products.reduce((acc, products) => {
      return acc + calculatedProductTotalPrice(products) * products.quantity
    },0)
  },[products])

  const totalDiscounts = subTotalPrice - totalPrice

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
        clearProductQuantity,
        subTotalPrice,
        totalPrice,
        totalDiscounts
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
