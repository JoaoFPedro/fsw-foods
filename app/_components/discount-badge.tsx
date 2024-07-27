import { Product } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";
interface DiscountBadgeProps {
    product: Pick<Product, 'discountPercentage'> 
}
const DiscountBadge = ({product}: DiscountBadgeProps) => {
    return ( 
        
        <div className=" left-1 top-1 rounded-full bg-primary px-2 py-[2px] flex items-center text-white text-xs">
        <ArrowDownIcon size={12}/>
        <span className="font-semibold text-xs">{product.discountPercentage}%</span>
      </div>
     );
}
 
export default DiscountBadge;