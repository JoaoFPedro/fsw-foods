import { Prisma, Product } from "@prisma/client";
import Image from "next/image";
import { calculatedProductTotalPrice } from "../_helpers/price";

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
        <div className="flex gap-2 items-center">
          <h3 className="font-semibold">
           R$ {Intl.NumberFormat("pt-BR", {
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(Number(calculatedProductTotalPrice(product)))}
          </h3>
          {product.discountPercentage >0 && (
            <span className="text-muted-foreground line-through text-xs pt-1 ">R$ {Intl.NumberFormat("pt-BR", {
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(Number(product.price))}</span>
          )
          }
        </div>
        <p className="text-muted-foreground">{product.restaurant.name}</p>
      </div>
    </div>
  );
};

export default ProductItem;
