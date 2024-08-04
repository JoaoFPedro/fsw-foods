import { db } from "@/app/_lib/prisma";
import Image from "next/image";
import CategoryItemList from "./_componentes/categoryItem-list";
import { notFound } from "next/navigation";
import ProductItem from "@/app/_components/product-item";

interface CategoryPageProps {
  params: {
    id: string;
   
  };
}
const CategoryPage = async ({
  params: { id },
}: CategoryPageProps) => {
  console.log(id);
  const category = await db.category.findUnique({
    where: {
        id,
      },
      include: {
        products:{
            include: {
                restaurant: {
                    select: {
                        name: true
                    }
                }
            }
        }
      }
    });
  
 
  if (!category) {
    return notFound();
  }
  return (
    <div>
    {category.products.map((product) => (
        <ProductItem key={product.id} product={product}/>
    ))}
    </div>
  );
};

export default CategoryPage;
