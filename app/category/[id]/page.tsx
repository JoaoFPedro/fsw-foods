import { db } from "@/app/_lib/prisma";
import Image from "next/image";

interface CategoryPageProps {
    params :{
        id: string
    }
}
const CategoryPage = async ({params: {id}}:CategoryPageProps) => {
    const category = await db.product.findMany({
where: {
    category: {
        name:'Sucos'
    }
}
    })
    console.log('category',category)
    return ( 
        <Image src={category[0].imageUrl} fill alt={category[0].name} />
     );
}
 
export default CategoryPage;