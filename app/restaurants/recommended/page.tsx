import Header from "@/app/_components/Header";
import Restaurants from "@/app/_components/restaurants-item";
import { db } from "@/app/_lib/prisma";

const RecommendedRestaurant = async () => {
  const restaurants = await db.restaurant.findMany({});
  return (
    <div className="mb-4">
      <div className="mb-9">
        <Header />
      </div>
      <span className="p-5 text-xl font-semibold">
        Restaurantes Recomendados
      </span>
      <div className="flex flex-col space-y-4 p-5">
        {restaurants.map((restaurant) => (
          <Restaurants
            key={restaurant.id}
            restaurants={restaurant}
            clasName="min-w-full max-w-full space-y-2"
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedRestaurant;
