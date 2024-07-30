import { db } from "@/app/_lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import RestaurantImage from "./_components/restaurant-image";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}

const RestaurantPage = async ({ params: { id } }: RestaurantPageProps) => {
  const restaurants = await db.restaurant.findUnique({
    where: {
      id,
    },
  });

  if (!restaurants) {
    return notFound();
  }
  return (
    <RestaurantImage restaurants={restaurants}/>
  );
};

export default RestaurantPage;
