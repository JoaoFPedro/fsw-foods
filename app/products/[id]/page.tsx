
import { Button } from "@/app/_components/ui/button";
import { formatCurrency, calculatedProductTotalPrice } from "@/app/_helpers/price";
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
  console.log(product);
  if (!product) {
    return notFound();
  }
  
  return (
    <div>
      <div className="relative h-[360px] w-full">
       <ProductImage product={product} />
      </div>
     <ProductPage product={product}/>
    </div>
  );
};

export default ProductsPage;
