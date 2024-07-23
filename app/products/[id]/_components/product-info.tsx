import { Button } from "@/app/_components/ui/button";
import {
  calculatedProductTotalPrice,
  formatCurrency,
} from "@/app/_helpers/price";
import { Prisma, Product } from "@prisma/client";
import { ArrowDownIcon, ChevronLeft, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

interface ProductPageProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
          imageUrl: true;
        };
      };
    };
  }>;
}
const ProductPage = ({ product }: ProductPageProps) => {
  console.log(product);
  return (
    <>
      {/* Titulo e preço */}

      <div className="p-5">
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

        <h1 className="pt-2 text-xl font-semibold">{product.name}</h1>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">
                {formatCurrency(calculatedProductTotalPrice(product))}
              </h3>
              {product.discountPercentage && (
                <div className="left-1 top-1 flex items-center rounded-full bg-primary px-2 py-[2px] text-white">
                  <ArrowDownIcon size={12} />
                  <span className="text-xs font-semibold">
                    {product.discountPercentage}%
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="border border-solid border-muted-foreground" variant='ghost' >
            <ChevronLeftIcon size={22} />
            </Button>
            <p>1</p>
            <Button className="border border-solid border-muted-foreground" variant='ghost' >
            <ChevronRightIcon size='icon' />
            </Button>
          </div>
        </div>
        {product.discountPercentage > 0 && (
          <span className="pt-1 text-muted-foreground">
            De {formatCurrency(Number(product.price))}
          </span>
        )}
      </div>
    </>
  );
};

export default ProductPage;
