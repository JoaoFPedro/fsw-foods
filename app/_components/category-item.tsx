"use client";
import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {

  return (
    <Link href={`category/${category.id}`}>
      <div
        className="flex items-center gap-3 rounded-full px-4 py-3 shadow-md"
       
      >
        <Image
          src={category.imageUrl}
          alt={category.name}
          height={30}
          width={30}
        />
        <h1>{category.name}</h1>
      </div>
    </Link>
  );
};

export default CategoryItem;
