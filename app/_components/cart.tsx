import { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card } from "./ui/card";
import { formatCurrency } from "../_helpers/price";

const Cart = () => {
  const { products, subTotalPrice, totalPrice, totalDiscounts } =
    useContext(CartContext);
  return (
    <>
      <div className="space-x-1 py-4">
        {products.map((product) => (
          <CartItem key={product.id} cartItem={product} />
        ))}
      </div>

      <Card className="p-5">
        <div className="flex items-center justify-between border-b pb-2">
          <span className="text-sm text-muted-foreground">Subtotal</span>
          <span>{formatCurrency(subTotalPrice)}</span>
        </div>
        <div className="flex items-center justify-between border-b pb-2 pt-2">
          <span className="text-sm text-muted-foreground">Descontos</span>
          <span>- {formatCurrency(totalDiscounts)}</span>
        </div>

        <div className="flex justify-between pb-2 pt-2">
          <h1 className="font-semibold">Total</h1>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
      </Card>
    </>
  );
};

export default Cart;
