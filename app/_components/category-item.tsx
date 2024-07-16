import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-full px-4 py-3 shadow-md">
      <Image
        src={category.imageUrl}
        alt={category.name}
        height={30}
        width={30}
      />
      <h1>{category.name}</h1>
    </div>
  );
};

export default CategoryItem;
