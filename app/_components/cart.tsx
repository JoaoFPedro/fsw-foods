import { useContext } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";

const Cart = () => {
  const { products, subTotalPrice, totalPrice, totalDiscounts } =
    useContext(CartContext);
  return (
    <div className="space-x-1 py-4">
      {products.map((product) => (
        <CartItem key={product.id} cartItem={product} />
      ))}

      <div className="mt-6">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between border-b pb-2 text-xs ">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatCurrency(subTotalPrice)}</span>
            </div>
            <div className="flex justify-between pb-2 pt-2 text-xs  border-b">
              <h1 className="text-muted-foreground">Entrega</h1>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2 pt-2 text-xs">
              <span className="text-muted-foreground">Descontos</span>
              <span>
                -{" "}
                {Number(products[0].restaurant.deliveryFee) === 0
                  ? "Grátis"
                  : formatCurrency(Number(products[0].restaurant.deliveryFee))}
              </span>
            </div>

            <div className="flex justify-between pb-2 pt-2 text-xs">
              <h1 className="font-semibold">Total</h1>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <Button className="w-full mt-6">Finalizar pedido</Button>
    </div>
  );
};

export default Cart;
