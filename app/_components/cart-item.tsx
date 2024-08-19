import { CartContext, CartProduts } from "@/app/_context/cart";
import Image from "next/image";
import CategoryItem from "./category-item";
import { calculatedProductTotalPrice, formatCurrency } from "../_helpers/price";
import DiscountBadge from "./discount-badge";
import { ChevronLeft, ChevronRight, TrashIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useContext } from "react";
import Quantity from "./quantity";

interface CartItemProps {
  cartItem: CartProduts;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between">
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
         <Quantity/>
        </div>
       
      </div>
      
    </div>
  );
};

export default CartItem;
