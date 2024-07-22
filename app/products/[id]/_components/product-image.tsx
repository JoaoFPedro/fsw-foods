"use client"
import { Button } from "@/app/_components/ui/button";
import { Product } from "@prisma/client";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface ProductImageProps {
    product: Pick<Product, 'name' | 'imageUrl'>
}
const ProductImage = ({product}:ProductImageProps) => {
    const router = useRouter()

    const handleBackClick =() =>{
        router.push('/')
    }
    return ( 
        <>
         <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
          sizes="icon"
        />
        <Button onClick={handleBackClick}
          className="hover:tex-white absolute left-4 top-4 rounded-full bg-white text-foreground"
          size="icon"
        >
          <ChevronLeftIcon />
        </Button></>
     );
}
 
export default ProductImage;