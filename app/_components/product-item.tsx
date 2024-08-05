"use client"
import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import { calculatedProductTotalPrice, formatCurrency } from "../_helpers/price";
import { ArrowDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";


interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const router = useRouter()
  return (
  
<Link className="w-[150px] min-w-[150px] space-y-2" href={`/products/${product.id}`}>
<div className="w-full space-y-2" >
      <div className="relative aspect-square w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
        {product.discountPercentage && (
          <div className="absolute left-1 top-1 rounded-full bg-primary px-2 py-[2px] flex items-center">
            <ArrowDownIcon size={12} className=" text-white"/>
            <span className="font-semibold text-xs text-white">{product.discountPercentage}%</span>
          </div>
        )}
      </div>
      <div className="">
        <h2 className="truncate text-sm">{product.name}</h2>
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">
            {formatCurrency(calculatedProductTotalPrice(product))}
          </h3>
          {product.discountPercentage > 0 && (
            <span className="pt-1 text-xs text-muted-foreground line-through">
              {formatCurrency(Number(product.price))}
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-xs mb-3">{product.restaurant.name}</p>
      </div>
    </div>
</Link>
  );
};

export default ProductItem;
