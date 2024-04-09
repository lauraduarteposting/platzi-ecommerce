import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";
const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
   
 
        <aside
          className={`${
            context.isProductDetailOpen ? "flex" : "hidden"
          } product-detail  flex flex-col bg-white fixed right-0 border border-black rounded-lg`}
        >
          <div className="flex justify-between itmems-center p-6">
            <h2 className="font-medium text-xl">Detalle del producto</h2>
            <div>
              <XMarkIcon
                className="w-6 h-6 cursor-pointer"
                onClick={() => context.setIsProductDetailOpen(false)}
              />
            </div>
          </div>
          <div>
            <figure className="px-6">
              <img
                src={context.productToShow.images?.[0]}
                alt={context.productToShow.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>
            <p className="flex flex-col p-6 ">
              <span className="font-medium text-2xl mb-2">
                ${context.productToShow.price}
              </span>
              <span className="font-medium text-md">
                {context.productToShow.title}
              </span>
              <span className="font-light text-sm">
                {context.productToShow.description}
              </span>
            </p>
          </div>
        </aside>
     
  );
};

export default ProductDetail;
