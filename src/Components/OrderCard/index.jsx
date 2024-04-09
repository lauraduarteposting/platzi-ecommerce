import { useState, useContext } from "react";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const OrderCard = (props) => {
  const { imageUrl, title, price, id, handleDelete, onShow } = props;
  const [amount, setAmount] = useState(1);
  const context = useContext(ShoppingCartContext);
  const handleDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      context.setCartP;
    } else {
      handleDelete(id);
    }
  };

  const handleIncrease = () => {
    setAmount(amount + 1);
  };

  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="font-light text-sm">{title}</p>
      </div>
      {!onShow && (
        <div className="flex items-center gap-2">
          <MinusIcon
            className="w-3 h-3 cursor-pointer rounded-full border border-gray-400 flex items-center justify-center"
            onClick={handleDecrease}
          ></MinusIcon>

          <span className="font-medium text-lg">{amount}</span>
          <PlusIcon
            className="w-3 h-3 cursor-pointer rounded-full border border-gray-400 flex items-center justify-center"
            onClick={handleIncrease}
          ></PlusIcon>
        </div>
      )}
      <div className="flex gap-4 ">
        <p className="font-medium text-lg font-bold">${price * amount}</p>
        {!onShow && (
          <p>
            <TrashIcon
              className="w-6 h-6 cursor-pointer text-red-500"
              onClick={() => handleDelete(id)}
            />
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
