import { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card } from "./ui/card";

const Cart = () => {
  const { products, subTotalPrice, totalPrice, totalDiscounts } = useContext(CartContext);
  return (
    <>
    <div className="space-x-1 py-5">
      {products.map((product) => (
       <CartItem key={product.id}cartItem={product}/>
      ))}
    </div>

    <Card>

<h1>{subTotalPrice}</h1>
<h1>{totalPrice}</h1>
<h1>{totalDiscounts}</h1>
</Card>

    </>
  );
};

export default Cart;
