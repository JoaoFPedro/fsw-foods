import { createContext, FunctionComponent, useState } from "react";
import { db } from "../_lib/prisma";
import { Prisma } from "@prisma/client";

interface ProductDetailsProps {
    product: Prisma.ProductGetPayload<{
      include: {
        restaurant: true;
      };
    }>;
   
  }

export const productContext = createContext<ProductDetailsProps>({
    product:
})


const ProductContextProvider:  FunctionComponent<{ children: any }> = async ({
    children
  }) => {
    const [products,setProduct] = useState()
    
//      const products = await db.product.findMany({
//     where: {
//       discountPercentage: {
//         gt: 0,
//       },
//     },
//     take: 10,
//     include:{
//       restaurant: {
//         select: {
//           name: true
//         }
//       }
//     }
//   });
 
 

 const productUser = () => {
    setProduct(products)
  }

  
    return (
      <productContext.Provider
        value={{ productUser}}
      >
        {children}
      </productContext.Provider>
    )
  }
  export default ProductContextProvider