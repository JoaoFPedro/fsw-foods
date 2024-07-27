import Header from "./_components/Header";
import Search from "./_components/Search";
import CategoryList from "./_components/category-list";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRight } from "lucide-react";
import RestaurantList from "./_components/restaurant-list";
import PromoBanner from "./_components/promo-banner";

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

      <PromoBanner
        src="/promoBanner01.png"
        alt="Até 30% de desconto em pizzas"
      />
      <div className="pt-5">
        <div className="flex items-center justify-between px-5">
          <h2>Pedidos Recomendados</h2>
          
          <Button variant="ghost" className="p-0 text-xs text-primary">
            Ver todos
            <ChevronRight />
          </Button>
        </div>
        <ProductList />
       
      </div>

      <PromoBanner
        src="/promoBanner02.png"
        alt="a partir de R$17,90 em lanches"
      />
      <div className="flex items-center justify-between px-5">
        <h2>Restaurantes Recomendados</h2>

       
        <Button variant="ghost" className="p-0 text-xs text-primary">
          Ver todos <ChevronRight />
        </Button>
      </div>
      <RestaurantList />
    </>
  );
};

export default Home;
