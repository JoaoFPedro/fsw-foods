import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Separator } from "@/app/_components/ui/separator";
import { formatCurrency } from "@/app/_helpers/price";
import { OrderStatus, Prisma } from "@prisma/client";
import { ChevronRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      restaurant: true;
      products: {
        include: {
          product: true;
        };
      };
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
      <CardContent className="p-5">
        <div className={`w-fit rounded-full bg-[#EEEEEE] px-2 py-1 text-muted-foreground ${order.status !== "COMPLETED" && "bg-green-500 text-white"}`}>
          <span className="block text-xs">{getOrderStatusLabel(order.status)}</span>
        </div>
        <div className="flex items-center gap-2 pt-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={order.restaurant.imageUrl} />
          </Avatar>
          <div className="flex w-full justify-between">
            <span>{order.restaurant.name}</span>
            <Button variant='link' asChild>
            <Link href={`/restaurants/${order.restaurant.id}`} >
            <ChevronRight />
            </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
        <div>
          {order.products.map((product) => (
            <div key={product.id} className="flex gap-2 py-3">
              <div className="h-5 w-5 bg-muted-foreground rounded-full flex items-center justify-center text-white">
              <span>{product.quantity}</span>
              </div>
              <span className="text-sm text-muted-foreground">{product.product.name}</span>
            </div>
          ))}
        </div>
        <Separator className="" />
        <div className="pt-3 flex justify-between items-center">
        <span className="text-sm">{formatCurrency( Number(order.totalPrice))}</span>
        <Button size='sm' disabled={order.status !== 'COMPLETED'} variant='ghost' className="text-primary text-sm">
          <span>Refazer pedido</span>
        </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItem;
