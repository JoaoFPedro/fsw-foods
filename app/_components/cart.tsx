import { useContext, useState } from "react";
import { CartContext } from "../_context/cart";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";
import { createOrder } from "../_actions/orders";
import { OrderStatus } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";


const Cart = () => {
  const {data} = useSession()
  const[isSubmitLoading, setSubmitIsLoading] = useState(false)
  const[isConfirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const { products, subTotalPrice, totalPrice, totalDiscounts, clearProducts } =
    useContext(CartContext);

    const handleFinishOrderClick = async() => {
     try {

      
      setSubmitIsLoading(true)
      setConfirmDialogOpen(true)
      
      if(!data?.user.id) return
      const restaurant = products?.[0].restaurant
      await createOrder({
        subTotalPrice,
        totalDiscounts,
        totalPrice,
        deliveryFee: restaurant.deliveryFee,
        deliveryTimeMinutes: restaurant.deliveryTimeMinutes,
        restaurant:{
          connect:{id: restaurant.id}
        },
        status: OrderStatus.CONFIRMED,
        user:{
          connect: {id: data?.user.id}
        }
      })
      
      clearProducts()
     } catch (error) {
      console.log(error)
      
     }
     finally{
      setSubmitIsLoading(false)
     }
    }
  return (
    <>
    <div className="flex h-full flex-col py-5">
      <div className="flex-auto space-y-4">
        {products.map((product) => (
          <CartItem key={product.id} cartItem={product} />
        ))}
      </div>
      <div className="mt-6">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between border-b pb-2 text-xs">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatCurrency(subTotalPrice)}</span>
            </div>
            <div className="flex justify-between border-b pb-2 pt-2 text-xs">
              <h1 className="text-muted-foreground">Entrega</h1>
              <span>{formatCurrency(totalDiscounts)}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-2 pt-2 text-xs">
              <span className="text-muted-foreground">Descontos</span>
              <span>
                
                {Number(products?.[0].restaurant.deliveryFee) === 0 ?(
                  <span> Grátis</span>) : (
                  formatCurrency(Number(products?.[0].restaurant.deliveryFee)))}
              </span>
            </div>

            <div className="flex justify-between pb-2 pt-2 text-xs">
              <h1 className="font-semibold">Total</h1>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
      <Button className="mt-6 w-full" onClick={() => setConfirmDialogOpen(true)}
      disabled={isSubmitLoading}>
      {isSubmitLoading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      
        Finalizar pedido</Button>
    </div>
    
    <AlertDialog open={isConfirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
     
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleFinishOrderClick}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </>
  );
};

export default Cart;
