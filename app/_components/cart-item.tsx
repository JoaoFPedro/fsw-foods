import { CartContext, CartProduts } from "@/app/_context/cart";
import Image from "next/image";
import CategoryItem from "./category-item";
import { calculatedProductTotalPrice, formatCurrency } from "../_helpers/price";
import DiscountBadge from "./discount-badge";
import { ChevronLeft, ChevronRight, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useContext, useState } from "react";
import Quantity from "./quantity";

interface CartItemProps {
  cartItem: CartProduts;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const { decreseProductQuantity, increaseProductQuantity, clearProductQuantity } =
    useContext(CartContext);

  const handleIncreaseQuantity = () => {
    increaseProductQuantity(cartItem.id);
  };
  const handleDecreaseQuantity = () => {
    decreseProductQuantity(cartItem.id);
  };
  const handleClearDecreaseQuantity = () => {
    clearProductQuantity(cartItem.id);
  }
  return (
    <div className="flex items-center justify-between pb-3">
      <div className="flex items-center space-x-2">
        <div className="relative h-20 w-20">
          <Image
            src={cartItem.imageUrl}
            alt={cartItem.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-1">
          <h4 className="text-xs">{cartItem.name}</h4>
          <div className="flex gap-1">
            <h4 className="text-sm font-semibold">
              {formatCurrency(calculatedProductTotalPrice(cartItem))}
            </h4>

            {/* PRECO ORIGINAL */}
            {cartItem.discountPercentage > 0 && (
              <span className="text-sm text-muted-foreground line-through">
                {formatCurrency(Number(cartItem.price))}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-center">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 border border-solid border-muted-foreground"
            >
              <ChevronLeft onClick={handleDecreaseQuantity} />
            </Button>
            <span className="w-3">{cartItem.quantity}</span>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 border border-solid border-muted-foreground"
            >
              <ChevronRight onClick={handleIncreaseQuantity} />
            </Button>
          </div>
        </div>
        
      </div>
      <Button
              size="icon"
              variant="ghost"
              className="h-6 w-6 border border-solid border-muted-foreground relative left-4 items-center "
            >
              <TrashIcon onClick={handleClearDecreaseQuantity} />
            </Button>
    </div>
  );
};

export default CartItem;
