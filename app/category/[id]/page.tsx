import { db } from "@/app/_lib/prisma";

import { notFound } from "next/navigation";
import ProductItem from "@/app/_components/product-item";
import Header from "@/app/_components/Header";

interface CategoryPageProps {
  params: {
    id: string;
  };
}
const CategoryPage = async ({ params: { id } }: CategoryPageProps) => {
  console.log(id);
  const category = await db.category.findUnique({
    where: {
      id,
    },
    include: {
      products: {
        include: {
          restaurant: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!category) {
    return notFound();
  }
  return (
    <>
     <Header />
      <div className="px-5">
        <h2 className="mb-6 text-lg font-semibold">{category.name}</h2>
        <div className="grid grid-cols-2 gap-4 min-w-full  max-w-full space-y-2">
          {category.products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              
            />
          ))}
        </div>
      </div>
    </>
  
  );
};

export default CategoryPage;
