import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css";
import { Link } from "react-router-dom";
const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date:new Date().toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
    context.setIsCheckoutSideMenuOpen(false);
    context.setSearchByTitle(null);
  };
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col bg-white fixed right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between itmems-center p-6">
        <h2 className="font-medium text-xl">Mi orden</h2>
        <div>
          <XMarkIcon
            className="w-6 h-6 cursor-pointer"
            onClick={() => context.setIsCheckoutSideMenuOpen(false)}
          />
        </div>
      </div>

      <div className="px-6 overflow-y-scroll flex-1">
        {context.cartProducts?.map((product, index) => (
          <OrderCard
            key={product.id}
            imageUrl={product.images[0]}
            title={product.title}
            price={product.price}
            id={product.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="flex justify-between items-center p-6">
        <span className="font-medium text-2xl font-bold">Total:</span>
        <span className="font-medium text-2xl font-bold">
          ${totalPrice(context.cartProducts)}
        </span>
      </div>
      <Link to="/my-orders/last">
        <button
          className="bg-black text-white px-6 py-2 rounded-lg mx-5 mb-4"
          onClick={() => handleCheckout()}
        >
          Pagar
        </button>
      </Link>
    </aside>
  );
};

export default CheckoutSideMenu;
