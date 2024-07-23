"use client";
import ProductList from "@/app/_components/product-list";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import {
  calculatedProductTotalPrice,
  formatCurrency,
} from "@/app/_helpers/price";
import { Prisma, Product } from "@prisma/client";
import {
  ArrowDownIcon,
  BikeIcon,
  ChevronLeft,
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
  Timer,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductPageProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true
    };
  }>;
  complementaryProduct: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>[];
}
const ProductPage = ({ product, complementaryProduct }: ProductPageProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncreaseQuantity = () => {
    setQuantity((preValue) => preValue + 1);
  };
  const handleDecreaseQuantity = () => {
    setQuantity((preValue) => preValue - 1);
  };
  return (
    
     
<div className=" relative rounded-tl-3xl rounded-tr-3xl z-50  mt-[-1.5rem] bg-white">
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

        <h1 className="pt-2 text-xl font-semibold">{product.name}</h1>
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2 pt-2">
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
          <div className="flex items-center gap-2 text-center">
            <Button
              className="border border-solid border-muted-foreground"
              variant="ghost"
              size="icon"
            >
              <ChevronLeftIcon onClick={handleDecreaseQuantity} />
            </Button>
            <span className="w-4"> {quantity}</span>
            <Button
              className="border border-solid border-muted-foreground"
              variant="ghost"
              size="icon"
            >
              <ChevronRightIcon onClick={handleIncreaseQuantity} />
            </Button>
          </div>
        </div>
        {product.discountPercentage > 0 && (
          <span className="text-muted-foreground">
            De {formatCurrency(Number(product.price))}
          </span>
        )}
      </div>
        <Card className="flex justify-around py-2 mt-6 p-5">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span>Entrega</span>
            <BikeIcon size={16}/>
          </div>
          <p>Gratis</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span>Entrega</span>
            <Timer size={16}/>
          </div>
          <p>Gratis</p>
        </div>
        </Card>
        <div className="px-4 mt-6 font-semibold text-xl items-center">
          <h1>Sobre</h1>
        </div>
        <div className="mt-4 px-4 text-muted-foreground">
          <p>
            {product.description}
          </p>
        </div>     
        <div>
          SUCOS
          </div> 
          <div>
            <ProductList products= {complementaryProduct}  />
          </div>
        </div>
  );
};

export default ProductPage;
