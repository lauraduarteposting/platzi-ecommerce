import {
  ChevronRightIcon,
  CalendarDaysIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black w-80 p-5  rounded-lg">
      <div className="flex justify-between w-full">
        <p className="flex flex-col ">
          <div className="flex flex-row">
            <CalendarDaysIcon className="h-4 w-4 text-black m-1 " />
            <span className="font-light">{date}</span>
          </div>
          <div className="flex flex-row">
          <ShoppingBagIcon className="h-4 w-4 text-black m-1" />
          <span className="font-light">{totalProducts} products</span>
          </div>
        </p>
        <div className="flex items-center justify-center gap-1">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
