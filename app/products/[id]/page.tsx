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
import ProductPage from "./_components/product-details";
import DiscountBadge from "@/app/_components/discount-badge";
import ProductDetails from "./_components/product-details";

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
 <ProductDetails product={product}/>
    </div>
  );
};

export default ProductsPage;
