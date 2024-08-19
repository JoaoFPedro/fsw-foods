import { CartProduts } from "@/app/_context/cart";
import Image from "next/image";
import CategoryItem from "./category-item";
import { calculatedProductTotalPrice, formatCurrency } from "../_helpers/price";
import DiscountBadge from "./discount-badge";

interface CartItemProps {
  cartItem: CartProduts;
}

const CartItem = ({ cartItem }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className=" flex items-center space-x-2">
        <div className="relative h-20 w-20">
          <Image
            src={cartItem.imageUrl}
            alt={cartItem.name}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div>
            <h1 className="text-sm">{cartItem.name}</h1>
          <div className="flex gap-1 ">
            <h2 className="text-sm font-semibold">
              {formatCurrency(calculatedProductTotalPrice(cartItem))}
            </h2>
            
          {/* PRECO ORIGINAL */}
          {cartItem.discountPercentage > 0 && (
            <span className="text-sm text-muted-foreground line-through">
               {formatCurrency(Number(cartItem.price))}
            </span>
          )}
  
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartItem;
