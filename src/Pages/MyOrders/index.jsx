import { useContext } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80 items-center  justify-center relative mb-4 ">
        <h1 className="font-medium text-xl">My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link to={`/my-orders/${index}`} key={index}>
       
          <OrdersCard
            date={order.date}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
};

export default MyOrders;
