import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { formatCurrency } from "@/app/_helpers/price";
import { Restaurant } from "@prisma/client";
import { BikeIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
interface RestaurantDetailsProps {
  restaurant: Restaurant;
}

const RestaurantDetails = ({ restaurant }: RestaurantDetailsProps) => {
  return (
    <div className="p-5">
      {/* RESTAURANT */}
      <div className="flex items-center gap-1">
        <div className="relative h-8 w-8">
          <Image
            src={restaurant.imageUrl}
            alt={restaurant.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex">
          <span className="text-xl font-semibold">{restaurant.name}</span>
          <div className="left-2 top-3 flex items-center gap-1 rounded-full bg-white px-2 py-[2px]">
            <StarIcon className="fill-yellow-400 text-yellow-400" size={16} />
            <span className="text-xs font-semibold">5.0</span>
          </div>
        </div>
      </div>
      {/* CARD -  */}
      <Card className="mt-6 p-5 flex justify-around">
        {/* ENTREGA */}
        <div className="flex flex-col items-center">
          <div className="flex">
            <span>Entrega</span>
            <BikeIcon />
          </div>
          {Number(restaurant.deliveryFee) > 0 ? (
            <p className="text-sm font-semibold">
              {formatCurrency(Number(restaurant.deliveryFee))}
            </p>
          ) : (
            <p className="text-xl font-semibold">Grátis</p>
          )}
        </div>
        {/* TEMPO */}
        <div className="flex flex-col items-center">
            <div className="flex">
                <span>Entrega</span>
                <TimerIcon />
            </div>
            {Number(restaurant.deliveryFee) > 0 ? (
            <p className="text-sm font-semibold">
              {formatCurrency(Number(restaurant.deliveryFee))}
            </p>
          ) : (
            <p className="text-xl font-semibold">Grátis</p>
          )}
        </div>
      </Card>

      <div className="flex justify-around p-4 gap-2">
      <Button className="bg-gray-100 w-full rounded-lg shadow text-gray-600 text-base cursor-pointer transition-colors duration-300 hover:bg-gray-200">
        Japonesa
      </Button>
      <Button className="bg-gray-100  w-full rounded-lg shadow text-gray-600 text-base cursor-pointer transition-colors duration-300 hover:bg-gray-200">
        Sucos
      </Button>
      </div>

    <h2 className="text-xl font-semibold py-8">Mais Pedidos</h2>
    </div>
  );
};

export default RestaurantDetails;
