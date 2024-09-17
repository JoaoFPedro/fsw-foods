import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { redirect } from "next/navigation";
import { db } from "../_lib/prisma";
import Header from "../_components/Header";
import OrderItem from "./_components/order-item";

const MyOrdersPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    return redirect("/");
  }
  const orders = await db.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      restaurant: true,
      products: {
        include: {
          product: true,
        },
      },
    },
  });
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="pb-4">Meus Pedidos</h1>

        {orders.map((order) => (
          <div key={order.id} className="pb-4">
            <OrderItem order={order} />{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default MyOrdersPage;
