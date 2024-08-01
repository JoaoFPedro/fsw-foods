import { db } from "@/app/_lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import RestaurantImage from "./_components/restaurant-image";
import RestaurantDetails from "./_components/restaurant-details";

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
    include: {
      categories:{
        include:{
          products: {
            where:{
              restaurantId: id,
            },
            include: {
              restaurant: {
                select:{
                  name: true,
                }
              }
            }
          }
        }
      },
      products: {
        take:  10,
        include:{
          restaurant:{
            select:{
              name: true,
              categories: true
            }
          }
        }
      }
    }
  });

  if (!restaurants) {
    return notFound();
  }
  return (
    <>
    <RestaurantImage restaurants={restaurants}/>

    <RestaurantDetails restaurant={restaurants} />
    </>
  );
};

export default RestaurantPage;
