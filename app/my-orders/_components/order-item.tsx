import { Card, CardContent } from "@/app/_components/ui/card";
import { Separator } from "@/app/_components/ui/separator";
import { OrderStatus, Prisma } from "@prisma/client";

import Image from "next/image";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      restaurant: true;
      products: true;
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const getOrderStatusLabel = (status: OrderStatus) => {
    switch (status) {
      case "CONFIRMED":
        return "Confirmado";

      case "PREPARING":
        return "Preparando";
      case "DELIVERING":
        return "A caminho";
      case "COMPLETED":
        return "Pedido Finalizado";
      case "CANCELED":
        return "Cancelado";
    }
  };
  return (
    <Card>
      <CardContent>
        <div className="py-4">
          <span className="rounded-2xl bg-[#5DC05B] px-4 text-sm text-white">
            {getOrderStatusLabel(order.status)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image
              alt={order.restaurant.name}
              src={order.restaurant.imageUrl}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span>{order.restaurant.name}</span>
        </div>
        <Separator className="mt-3 bg-[#e2dddd]" />
      </CardContent>
    </Card>
  );
};

export default OrderItem;
