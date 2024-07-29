"use client";
import DiscountBadge from "@/app/_components/discount-badge";
import ProductList from "@/app/_components/product-list";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import {
  calculatedProductTotalPrice,
  formatCurrency,
} from "@/app/_helpers/price";
import { Prisma, Product } from "@prisma/client";
import {
  BikeIcon,
  ChevronLeft,
  ChevronRightIcon,
  TimerIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>;
  complementaryProducts: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>[];
}
const ProductDetails = ({
  product,
  complementaryProducts,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((preValue) => preValue + 1);
  };
  const handleDecreaseQuantity = () => {
    setQuantity((preValue) => {
      if (preValue === 1) return 1;

      return quantity - 1;
    });
  };
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-tl-3xl rounded-tr-3xl bg-white p-5 py-5">
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
        <div className="flex items-center gap-2 text-center">
          <Button
            size="icon"
            variant="ghost"
            className="border border-solid border-muted-foreground"
            onClick={handleDecreaseQuantity}
          >
            <ChevronLeft />
          </Button>
          <span className="w-3">{quantity}</span>
          <Button
            size="icon"
            variant="ghost"
            className="border border-solid border-muted-foreground"
            onClick={handleIncreaseQuantity}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      {/* DADOS DA ENTREGA */}
      <Card className="mt-6 flex justify-around p-5">
        {/* CUSTO  */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">Entrega</span>
            <BikeIcon size={14} />
          </div>
          {Number(product.restaurant.deliveryFee) > 0 ? (
            <p className="text-sm font-semibold">
              {formatCurrency(Number(product.restaurant.deliveryFee))}
            </p>
          ) : (
            <p className="text-xs font-semibold">Grátis</p>
          )}
        </div>

        {/* TEMPO DE ENTREGA  */}

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">Tempo</span>
            <TimerIcon size={14} />
          </div>

          <p className="text-sm font-semibold">
            {product.restaurant.deliveryTimeMinutes} min
          </p>
        </div>
      </Card>
      <div className="mt-6 space-y-3">
        <h3 className="font-semibold">Sobre</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="font-semibold">Sucos</h3>
        <ProductList products={complementaryProducts} />
      </div>
    </div>
  );
};

export default ProductDetails;
