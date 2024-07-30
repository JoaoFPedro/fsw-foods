"use client"
import { Button } from "@/app/_components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RestaurantImageProps {
    restaurants: Pick<Restaurant, 'name' | 'imageUrl'>
}

const RestaurantImage = ({restaurants}: RestaurantImageProps) => {
    const navigation = useRouter()

    const handleBackClick = () => {
        navigation.back()
    }
    return (
        
        //  IMAGE 
        <div className="relative h-[360px] w-full">
        <Image
          src={restaurants?.imageUrl}
          alt={restaurants?.name}
          fill
          className="object-cover"
        />
        {/* LEFT BUTTON */}
        <Button className="absolute bg-white top-2 left-2 text-foreground" size='icon' onClick={handleBackClick}>
            <ChevronLeftIcon />

        </Button>
      </div>
     );
}
 
export default RestaurantImage
