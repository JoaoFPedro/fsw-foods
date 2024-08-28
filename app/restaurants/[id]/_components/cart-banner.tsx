"use client";
import { Button } from "@/app/_components/ui/button";
import { CartContext } from "@/app/_context/cart";
import { formatCurrency } from "@/app/_helpers/price";
import { Restaurant } from "@prisma/client";
import { Pick } from "@prisma/client/runtime/library";
import { useContext } from "react";

interface CartBannerProps {
  restaurant: Pick<Restaurant, "id">;
}
const CartBanner = ({ restaurant }: CartBannerProps) => {
  const { products, totalPrice } = useContext(CartContext);

  const restaurantHasProductOnCart = products.some(
    (product) => product.restaurantId === restaurant.id,
  );

  if (!restaurantHasProductOnCart) return null;
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-white p-5 pt-3">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>Total sem a entrega</span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
        <Button>Ver sacola</Button>
      </div>
    </div>
  );
};

export default CartBanner;
