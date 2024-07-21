import Image from "next/image";
import Header from "./_components/Header";
import Search from "./_components/Search";
import CategoryList from "./_components/category-list";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRight } from "lucide-react";
import RestaurantList from "./_components/restaurant-list";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-3">
        <CategoryList />
      </div>

      <Image
        src="/promoBanner01.png"
        alt="Até 30% de desconto em pizzas"
        height={0}
        width={0}
        className="h-auto w-full object-contain"
        sizes="100vw"
        quality={100}
      />
      <div className="pt-5">
        <div className="flex items-center justify-between px-5">
          <h2>Pedidos Recomendados</h2>
          <Button variant="ghost" className="p-0 text-primary text-xs">
            Ver todos
            <ChevronRight />
          </Button>
        </div>
        <ProductList />
      </div>

      <Image
        src="/promoBanner02.png"
        alt="Até 30% de desconto em pizzas"
        height={0}
        width={0}
        className="h-auto w-full object-contain pb-4 pt-4"
        sizes="100vw"
        quality={100}
      />
      <div className="flex items-center justify-between px-5">
        <h2>Restaurantes Recomendados</h2>
        <Button variant="ghost" className="p-0 text-primary text-xs">
          Ver todos <ChevronRight />
        </Button>
      </div>
      <RestaurantList />
    </>
  );
};

export default Home;
