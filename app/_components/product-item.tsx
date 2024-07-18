import { Prisma, Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Prisma.ProductGetPayload <{
    include:{
      restaurant:{
        select:{
          name: true
        }
      }
    }
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
        <h1>{product.name}</h1>
        {/* <p>R${product.price}</p> */}
        <p>{product.restaurant.name}</p>
      </div>
    </div>
  );
};

export default ProductItem;
