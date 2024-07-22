import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

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
    include : {
        restaurant: true
    }
    
  });
  console.log(product)
  if (!product) {
    return notFound();
  }
  return (
    <div>
      <div className="relative h-[360px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          sizes="icon"
        />
        <Button
          className="absolute left-4 top-4 rounded-full text-foreground bg-white hover:tex-white"
          size="icon"
        >
          <ChevronLeftIcon />
        </Button>
      </div>
    </div>
  );
};

export default ProductsPage;
