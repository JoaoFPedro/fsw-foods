import { calculatedProductTotalPrice, formatCurrency } from "@/app/_helpers/price";
import { Prisma, Product } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";

interface ProductPageProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant:{
        select: {
          name: true,
          imageUrl: true
        }
      }      
        
      
    }
  }>;
}
const ProductPage = ({product}: ProductPageProps) => {
    console.log(product)
    return ( 
        <>
             {/* Titulo e preço */}

      <div className="p-5 ">
        {/* Restaurante */}
        <div className="flex items-center gap-2">
          <div className="relative h-6 w-6">
            <Image
              src={product.restaurant.imageUrl}
              alt={product.restaurant.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>
        <div>
            <h1 className="pt-2 text-xl font-semibold">{product.name}</h1>
            
          </div>
          <div className=" flex items-center gap-2 space-x-1">
          <h3 className="text-xl font-semibold">
            {formatCurrency(calculatedProductTotalPrice(product))}
          </h3>
          {product.discountPercentage && (
          <div className=" left-1 top-1 rounded-full bg-primary text-white px-2 py-[2px] flex items-center">
            <ArrowDownIcon size={12}/>
            <span className="font-semibold text-xs">{product.discountPercentage}%</span>
            
          </div>
          
        )}
 
                <div className="items">
        <h1 className="text-red-500">lalala</h1>
        </div>

        </div>
        {product.discountPercentage > 0 && (
            <span className="pt-1  text-muted-foreground ">
              De {formatCurrency(Number(product.price))}
            </span>
          )}
      </div>
        </>
     );
}
 
export default ProductPage;