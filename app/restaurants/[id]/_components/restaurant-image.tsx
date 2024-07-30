import { Restaurant } from "@prisma/client";
import Image from "next/image";
interface RestaurantImageProps {
    restaurants: Pick<Restaurant, 'name' | 'imageUrl'>
}

const RestaurantImage = ({restaurants}: RestaurantImageProps) => {
    return ( 
        <div className="relative h-[360px] w-full">
        <Image
          src={restaurants?.imageUrl}
          alt={restaurants?.name}
          fill
          className="object-cover"
        />
      </div>
     );
}
 
export default RestaurantImage
