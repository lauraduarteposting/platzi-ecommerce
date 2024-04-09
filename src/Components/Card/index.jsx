import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
const Card = ({ product, index }) => {
  const context = useContext(ShoppingCartContext);

  const showProductDetail = (event) => {
    event.stopPropagation();
    context.setIsCheckoutSideMenuOpen(false);
    context.setIsProductDetailOpen(true);
    context.setProductToShow(product);
  };

  const AddProductsToCart = (event) => {
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, product]);
    if(context.count ===0) context.setCount(1);
    else context.setCount(context.count + 1);
    context.setIsProductDetailOpen(false);
    context.setIsCheckoutSideMenuOpen(true);
  };
  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (!isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center 
    items-center bg-white w-6 h-6 rounded-full m-2 cursor-pointer"
          onClick={(event) => AddProductsToCart(event)}
        >
          <PlusIcon className="w-4 h-4" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center 
    items-center bg-green-700 w-6 h-6 rounded-full m-2 cursor-pointer"
        >
          <CheckIcon className="w-4 h-4 text-white" />
        </div>
      );
    }
  };
  return (
    <div
      className="container bg-white cursor-pointer w-56 h-65 shadow-lg rounded-lg mx-auto"
      key={index}
      onClick={(event) => showProductDetail(event)}
    >
      <figure className="relative mb-5 w-full h-4/5">
        <span
          className="absolute bottom-0 left-0 
         bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-1"
        >
          {product.category}
        </span>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover rounded-lg"
        />
        {renderIcon(product.id)}
      </figure>

      <p className="flex justify-between mb-10">
        <span className="font-light text-sm mt-1"> {product.title}</span>
        <span className="font-medium text-lg">$ {product.price}</span>
      </p>
    </div>
  );
};

export default Card;
