import { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    
    <div className="space-x-1 py-5">
      {products.map((product) => (
       <CartItem key={product.id}cartItem={product}/>
      ))}
    </div>
  );
};

export default Cart;
