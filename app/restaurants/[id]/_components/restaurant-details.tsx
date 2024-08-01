import ProductList from "@/app/_components/product-list";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { calculatedProductTotalPrice, formatCurrency } from "@/app/_helpers/price";
import { Prisma, Restaurant } from "@prisma/client";
import { BikeIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
interface RestaurantDetailsProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      categories:{
        include:{
          products: {
            include: {
              restaurant: {
                select:{
                  name: true,
                },
              },
            },
          },
        },
      },
      products: {
        take: 10;
        include: {
          restaurant: {
            select: {
              name: true;
            };
          };
        };
      };
    };
  }>;
}

const RestaurantDetails = ({ restaurant }: RestaurantDetailsProps) => {
  console.log("CATEGORIES", restaurant.categories[2]);
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-tl-3xl rounded-tr-3xl bg-white p-5 py-5 ">
      {/* RESTAURANT */}
      <div className="flex items-center justify-between gap-1">
        <div className="flex items-center gap-[0.375rem]">
          <div className="relative h-8 w-8">
            <Image
              src={restaurant.imageUrl}
              alt={restaurant.name}
              fill
              className="rounded-full object-cover"
            />
          </div>

          <span className="text-xl">{restaurant.name}</span>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-white px-2 py-[2px]">
          <StarIcon className="fill-yellow-400 text-yellow-400" size={16} />
          <span className="text-xs font-semibold">5.0</span>
        </div>
      </div>
      {/* CARD -  */}
      <Card className="mt-6 flex justify-around p-5">
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

      <div className="mt-6 flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {restaurant.categories.map((category) => (
          <div
            key={category.id}
            className="min-w-[167px] rounded-lg bg-[#F4F4F4] text-center"
          >
            <span>{category.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold">Mais Pedidos</h2>

        <ProductList products={restaurant.products} />
      </div>

      <div className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold">Mais Pedidos</h2>

        <ProductList products={restaurant.products} />
      </div>

      <Card>
      <h2 className="text-xl font-semibold">
              {formatCurrency(calculatedProductTotalPrice(restaurant.products[2]))}
            </h2>
      </Card>
    </div>
  );
};

export default RestaurantDetails;
