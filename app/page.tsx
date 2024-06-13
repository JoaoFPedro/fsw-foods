
import Header from "./_components/Header";
import Search from "./_components/Search";
import CategoryList from "./_components/category-list";

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
    </>
   );
}
 
export default Home;