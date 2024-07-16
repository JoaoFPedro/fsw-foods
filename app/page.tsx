import Image from "next/image";
import Header from "./_components/Header";
import Search from "./_components/Search";
import CategoryList from "./_components/category-list";
import ProductList from "./_components/product-list";

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

      <ProductList />
    </>
  );
};

export default Home;
