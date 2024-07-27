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
      <div className="relative h-[360px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
        <Button
          className="absolute left-4 top-4 rounded-full bg-white text-foreground"
          size="icon"
        >
          <ChevronLeftIcon />
        </Button>
      </div>
      {/* TITULO E PREÇO */}
      <div className="p-5">
        {/* RESTURANTE */}
        <div className="flex items-center gap-1">
          <div className="relative h-6 w-6">
            <Image
              src={product.restaurant.imageUrl}
              alt={product.restaurant.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-muted-foreground">{product.restaurant.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
