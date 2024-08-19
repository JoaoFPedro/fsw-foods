import { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <>
      {products.map((product) => (
       <CartItem key={product.id}cartItem={product}/>
      ))}
    </>
  );
};

export default Cart;
