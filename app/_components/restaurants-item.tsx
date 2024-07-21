import { Restaurant } from "@prisma/client";
import { Badge, BikeIcon, TimerIcon } from "lucide-react";
import Image from "next/image";

interface RestaurantsProps {
    restaurants: Restaurant
}

const Restaurants = ({restaurants}: RestaurantsProps) => {
    
    return ( <>
    <div className="w-[300px] min-w-[300px] space-y-2">
    <div className="relative h-[150px] w-full">
        
        <Image
          src={restaurants.imageUrl}
          alt={restaurants.name}
          fill
          className="rounded-lg object-cover shadow-md"
        /> 
      </div>
      <div className="pt-2">
            <h2 className="truncate text-sm font-semibold">{restaurants.name}</h2>
           
        </div>
        <div className="flex gap-1 text-xs items-center">
          <BikeIcon className="text-primary " size={20}/>
           {Number(restaurants.deliveryFee) ===0 &&(
                <h1>Entrega grátis</h1>
           )}
           <TimerIcon className="text-primary "size={20} />
        <span>{restaurants.deliveryTimeMinutes}min</span>
        </div>
    </div>

    </> );
}
 
export default Restaurants;