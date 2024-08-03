import Header from "@/app/_components/Header";
import ProductItem from "@/app/_components/product-item";
import { db } from "@/app/_lib/prisma";

const RecommendedProducts = async () => {
    const products = await db.product.findMany({
        include:{
            restaurant: true
        }
    })
    return ( 
        <>
         <div className="mb-9">
        <Header />
      </div>
      <span className="p-5 text-xl font-semibold">
        Pedidos Recomendados
      </span>
        <div className="flex flex-wrap gap-4 p-5 items-center ">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
        </>
        
     );
}
 
export default RecommendedProducts;