"use client"
import { Button } from "@/app/_components/ui/button";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, HeartIcon } from "lucide-react";
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
        <div className="relative h-[215px] w-full">
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
        <Button size='icon' className="absolute right-4 top-2 h-7 w-7 rounded-full bg-gray-700">
            <HeartIcon size={16} className="fill-white" />
          </Button>
      </div>
     );
}
 
export default RestaurantImage
