import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import { calculatedProductTotalPrice, formatCurrency } from "../_helpers/price";

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
  return (
    <div className="w-[150px] min-w-[150px] space-y-2">
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
      </div>
      <div>
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
        <p className="text-muted-foreground">{product.restaurant.name}</p>
      </div>
    </div>
  );
};

export default ProductItem;
