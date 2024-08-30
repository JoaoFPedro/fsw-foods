import { CartContext, CartProduts } from "@/app/_context/cart";
import Image from "next/image";
import CategoryItem from "./category-item";
import { calculatedProductTotalPrice, formatCurrency } from "../_helpers/price";
import DiscountBadge from "./discount-badge";
import { ChevronLeft, ChevronRight, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useContext, useState } from "react";
import Quantity from "./quantity";
import { Card } from "./ui/card";

interface CartItemProps {
  cartItem: CartProduts;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const {
    decreseProductQuantity,
    increaseProductQuantity,
    clearProductQuantity,
  } = useContext(CartContext);

  const handleIncreaseQuantity = () => {
    increaseProductQuantity(cartItem.id);
  };
  const handleDecreaseQuantity = () => {
    decreseProductQuantity(cartItem.id);
  };
  const handleClearDProductQuantity = () => {
    clearProductQuantity(cartItem.id);
  };
  return (
    <div className="flex items-center justify-between pb-5">
      <div className="flex items-center space-x-2">
        <div className="relative  h-16 w-16">
          <Image
            src={cartItem.imageUrl}
            alt={cartItem.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-1 whitespace-nowrap">
          <h4 className="text-xs">{cartItem.name}</h4>
          <div className="flex items-center gap-1">
            <h4 className="text-sm font-semibold">
              {formatCurrency(
                calculatedProductTotalPrice(cartItem) * cartItem.quantity,
              )}
            </h4>

            {/* PRECO ORIGINAL */}
            {cartItem.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(Number(cartItem.price) * cartItem.quantity)}
              </span>
            )}
          </div>
          <div className="flex items-center text-center">
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 border border-solid border-muted-foreground"
            >
              <ChevronLeft onClick={handleDecreaseQuantity} />
            </Button>
            <p className="block w-8 text-xs">{cartItem.quantity}</p>
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 border border-solid border-muted-foreground"
            >
              <ChevronRight onClick={handleIncreaseQuantity} />
            </Button>
          </div>
        </div>
      </div>
<div>
<Button
        size="icon"
        variant="ghost"
        className="relative left-4 h-6 w-6 items-center border border-solid border-muted-foreground"
        onClick={handleClearDProductQuantity}
      >
        <TrashIcon size={16} />
      </Button>
</div>
    </div>
  );
};

export default CartItem;
