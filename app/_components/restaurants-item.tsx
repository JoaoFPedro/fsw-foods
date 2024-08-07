import { Restaurant } from "@prisma/client";
import { Badge, BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "../_lib/utils";

interface RestaurantsProps {
  restaurants: Restaurant;
  clasName?: string
}

const Restaurants = ({ restaurants, clasName }: RestaurantsProps) => {
  return (
    
<Link href={`/restaurants/${restaurants.id}`}>
<div className={cn('w-[300px] min-w-[300px] ', clasName)}>
        <div className="relative h-[150px] w-full">
          <Image
            src={restaurants.imageUrl}
            alt={restaurants.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />
           <div className="absolute left-2 top-3 rounded-full bg-white px-2 py-[2px] flex items-center gap-1">
            <StarIcon className="fill-yellow-400 text-yellow-400 " size={16} />
            <span className="font-semibold text-xs">5.0</span>
          </div>
          <Button size='icon' className="absolute right-2 top-2 h-7 w-7 rounded-full bg-gray-700">
            <HeartIcon size={16} className="fill-white" />
          </Button>
        </div>
        <div className="pt-2">
          <h2 className="truncate text-sm font-semibold">{restaurants.name}</h2>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <BikeIcon className="text-primary" size={20} />
          {Number(restaurants.deliveryFee) === 0 && <h1>Entrega grátis</h1>}
          <TimerIcon className="text-primary" size={20} />
          <span>{restaurants.deliveryTimeMinutes} min</span>
        </div>
      </div>
</Link>
    
  );
};

export default Restaurants;
