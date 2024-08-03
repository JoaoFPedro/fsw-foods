import Header from "@/app/_components/Header";
import Restaurants from "@/app/_components/restaurants-item";
import { db } from "@/app/_lib/prisma";

const RecommendedRestaurant = async () => {
  const restaurants = await db.restaurant.findMany({});
  return (
    <>
      <div className="mb-4">
        <Header />
      </div>
      <div className="space-y-4 px-5">
        {restaurants.map((restaurant) => (
          <Restaurants
            key={restaurant.id}
            restaurants={restaurant}
            clasName="min-w-full max-w-full"
          />
        ))}
      </div>
    </>
  );
};

export default RecommendedRestaurant;
