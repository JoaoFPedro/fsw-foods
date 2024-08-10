"use client";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchRestaurants } from "./_actions/search";
import { Restaurant } from "@prisma/client";
import Header from "../_components/Header";
import RestaurantsItem from "../_components/restaurants-item";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const searchParams = useSearchParams();
  const searchFor = searchParams.get("search");

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (!searchFor) return;
      const foundRestaurants = await searchRestaurants(searchFor);

      setRestaurants(foundRestaurants);
    };
    fetchRestaurants();
  }, [searchFor]);

  if (!searchFor) {
    return notFound();
  }

  return (
    <div className="mb-4">
      <div className="mb-9">
        <Header />
      </div>
      <span className="p-5 text-xl font-semibold">
        Restaurantes Encontrados
      </span>
      <div className="flex flex-col space-y-4 p-5">
        {restaurants.map((restaurant) => (
          <RestaurantsItem
            key={restaurant.id}
            restaurants={restaurant}
            clasName="min-w-full max-w-full space-y-2"
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
