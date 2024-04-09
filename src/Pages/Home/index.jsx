import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
const Home = () => {
  const context = useContext(ShoppingCartContext);
  const products = context.items;
  const renderProducts = () => {
    if (context.filteredItems.length > 0) {
      return context.filteredItems?.map((product, index) => (
        <Card key={product.id} product={product} />
      ));
    } else {
      return (
        <div className="col-span-4 flex justify-center">
          <p>No products found</p>
        </div>
      );
    }
  };

  return (
    <Layout>
      <div className="flex w-80 items-center  justify-center relative mb-4 ">
        <h1 className="font-medium text-xl mt-7">Exclusive Products</h1>
      </div>
      <input
        className="w-80 p-1 border border-black rounded-lg mb-4 focus:outline-none"
        onChange={(e) => context.setSearchByTitle(e.target.value)}
        type="text"
        placeholder="Search a product..."
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderProducts()}
      </div>

      <ProductDetail />
    </Layout>
  );
};

export default Home;
