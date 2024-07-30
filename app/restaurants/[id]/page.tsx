import { db } from "@/app/_lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

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
    <div>
      <Image
        src={restaurants?.imageUrl}
        alt={restaurants?.name}
        fill
        className="object-cover"
      />
    </div>
  );
};

export default RestaurantPage;
