import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const leftList = [
  {
    to: "/",
    name: "Shopi",
    className: "font-semibold text-xl",
    category: null,
  },
  {
    to: "/",
    name: "All",
    className: "",
    category: null,
  },
  {
    to: "/smartphones",
    name: "Smartphones",
    category: "smartphones",
    className: "",
  },
  {
    to: "/laptops",
    name: "Laptops",
    category: "laptops",
    className: "",
  },
  {
    to: "/fragrances",
    name: "Fragrances",
    category: "fragrances",
    className: "",
  },

  {
    to: "/groceries",
    name: "Groceries",
    category: "groceries",
    className: "",
  },
  {
    to: "/home-decoration",
    name: "Home Decoration",
    category: "home-decoration",
    className: "",
  },
];

const rightList = [
  {
    to: "",
    name: "laura.duarte@ccgltda.com",
    className: "",
  },
  {
    to: "/my-orders",
    name: "My Orders",
    className: "",
  },
  {
    to: "/my-account",
    name: "My Account",
    className: "",
  },
  {
    to: "/sing-in",
    name: "Sing In",
    className: "",
  },
  {
    to: "",
    name: "cart",
    className: "px-2",
  },
];

const NavBar = () => {
  const activeclassName = "underline underline-offset-4 decoration-1";
  const context = useContext(ShoppingCartContext);
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-lg font-light bg-blue-300 text-white top-0">
      <ul className="flex items-center gap-3">
        {leftList.map((item, index) => (
          <li key={index} className={item.className}>
            <NavLink
              to={item.to}
              key={index}
              onClick={() => context.setSearchByCategory(item.category)}
              className={({ isActive }) =>
                isActive ? activeclassName : undefined
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-3">
        {rightList.map((item, index) => (
          <li key={index} className={item.className}>
            <NavLink
              to={item.to}
              key={index}
              className={({ isActive }) =>
                isActive ? activeclassName : undefined
              }
            >
              {item.name === "cart" ? (
                <div className="flex items-center">
                  <ShoppingCartIcon
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => context.setIsCheckoutSideMenuOpen(true)}
                  />
                  <span>{context.count}</span>
                </div>
              ) : (
                item.name
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
