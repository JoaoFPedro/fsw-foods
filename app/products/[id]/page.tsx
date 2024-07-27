import { Button } from "@/app/_components/ui/button";
import {
  formatCurrency,
  calculatedProductTotalPrice,
} from "@/app/_helpers/price";
import { db } from "@/app/_lib/prisma";
import { ArrowDownIcon, ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import ProductImage from "./_components/product-image";
import ProductPage from "./_components/product-info";
import DiscountBadge from "@/app/_components/discount-badge";

interface ProductsPageProps {
  params: {
    id: string;
  };
}

const ProductsPage = async ({ params: { id } }: ProductsPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <div>
      {/* IMAGEM */}
      <ProductImage product={product} />

      {/* TITULO E PREÇO */}
      <div className="p-5">
        {/* RESTURANTE */}
        <div className="flex items-center gap-[0.375rem]">
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
        {/* NOME DO PRODUTO */}
        <h1 className="mb-2 mt-1 text-xl font-semibold">{product.name}</h1>

        {/* PREÇO DO PRODUTO E QUANTIDADE */}
        <div className="flex justify-between">
          {/* PRECO COM DESCONTO */}
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                {formatCurrency(calculatedProductTotalPrice(product))}
              </h2>
              {product.discountPercentage > 0 && (
                <DiscountBadge product={product} />
              )}
            </div>

            {/* PRECO ORIGINAL */}
            {product.discountPercentage > 0 && (
              <span className="text-sm text-muted-foreground">
                De {formatCurrency(Number(product.price))}
              </span>
            )}
          </div>

          {/* QUANTIDADE */}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
