// "use client";


// import ProductList from "@/app/_components/product-list";

// import { Button } from "@/app/_components/ui/button";


// import {
//   formatCurrency,
  
// } from "@/app/_helpers/price";
// import { Prisma } from "@prisma/client";
// import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
// import Image from "next/image";
// import { useContext, useState } from "react";

// interface ProductDetailsProps {
//   product: Prisma.ProductGetPayload<{
//     include: {
//       restaurant: true;
//     };
//   }>;
 
// }

// const ProductDetails = ({
//   product,
  
// }: ProductDetailsProps) => {

// console.log('dsadsada',product)
//   return (
//     <>
//       <div className="relative z-50 mt-[-1.5rem] rounded-tl-3xl rounded-tr-3xl bg-white py-5">
//         {/* RESTAURANTE */}
//         <div className="flex items-center gap-[0.375rem] px-5">
//           <div className="relative h-6 w-6">
//             <Image
//               src={product.restaurant.imageUrl}
//               alt={product.restaurant.name}
//               fill
//               sizes="100%"
//               className="rounded-full object-cover"
//             />
//           </div>
//           <span className="text-xs text-muted-foreground">
//             {product.restaurant.name}
//           </span>
//         </div>

//         {/* NOME DO PRODUTO */}
//         <h1 className="mb-2 mt-1 px-5 text-xl font-semibold">{product.name}</h1>

//         {/* PREÇO DO PRODUTO E QUANTIDADE */}
//         <div className="flex justify-between px-5">
//           {/* PREÇO COM DESCONTO */}
//           <div>
//             <div className="flex items-center gap-2">
//               <h2 className="text-xl font-semibold">
               
//               </h2>
        
//             </div>

//             {/* PREÇO ORIGINAL */}
//             {product.discountPercentage > 0 && (
//               <p className="text-sm text-muted-foreground">
//                 De: {formatCurrency(Number(product.price))}
//               </p>
//             )}
//           </div>

//           {/* QUANTIDADE */}
//           <div className="flex items-center gap-3 text-center">
//             <Button
//               size="icon"
//               variant="ghost"
//               className="border border-solid border-muted-foreground"
             
//             >
//               <ChevronLeftIcon />
//             </Button>
//             <span className="w-4">1</span>
//             <Button size="icon">
//               <ChevronRightIcon />
//             </Button>
//           </div>
//         </div>


//         <div className="mt-6 space-y-3 px-5">
//           <h3 className="font-semibold">Sobre</h3>
//           <p className="text-sm text-muted-foreground">{product.description}</p>
//         </div>

//         <div className="mt-6 space-y-3">
          
          
//         </div>

//         <div className="mt-6 px-5">

//         </div>
//       </div>

      
//     </>
//   );
// };

// export default ProductDetails;