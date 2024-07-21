import Image from "next/image";
import { db } from "../_lib/prisma";
import Restaurants from "./restaurants";

const RestaurantList = async () => {
  const restaurants = await db.restaurant.findMany({
    take: 5,
    where: {
        deliveryFee : 0,
        deliveryTimeMinutes: {
            lt: 50 // lt é a operação "menor que" (less than)
          }        
    }
  });
  return (
    <>
    <div className="flex overflow-x-scroll h-[300px] gap-4 px-5">
      
      {restaurants.map((restaurant) => (
        <Restaurants key={restaurant.id} restaurants={restaurant}/>
      ))}
      </div>
    </>
  );
};

export default RestaurantList;
