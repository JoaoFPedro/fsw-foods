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
    <div className="mb-4">
    <div className="mb-9">
      <Header />
    </div>
    <span className="p-5 text-xl font-semibold">
      {category.name}
    </span>
    <div className="flex flex-wrap items-center gap-4 p-5  ">
      {category.products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          
        />
      ))}
    </div>
  </div>
  );
};

export default CategoryPage;
