import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router";
import { MdDarkMode } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "../../context/useTheme";
import { useSelector } from "react-redux";
const Header = () => {
  const count = useSelector((state) => state.products.cart.length);
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { name: "Users", path: "/users" },
    { name: "Products", path: "/products" },
    // { name: "Carts", path: "/carts" },
  ];

  return (
    <header className="h-16 bg-gray-900 flex items-center ml-64 justify-between px-10 border border-gray-500 fixed left-0 right-0  ">
      <div className="flex  text-blue-800 font-bold text-md gap-3 items-center bg-blue-50 px-2 py-1 rounded hover:scale-105 transition-transform ">
        <Link to="/">Dummy APIs </Link>
        <FaArrowRight />
      </div>

      <div className="relative hidden md:flex gap-10 ">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={`text-md p-1 rounded hover:text-yellow-500 ${location.pathname === tab.path ? "bg-white text-yellow-500" : ""} tracking-wide font-bold `}
          >
            {tab.name}
          </NavLink>
        ))}
        <div className="flex items-center">
          <Link to={"/cart"} className="text-3xl relative inline-block">
            <TiShoppingCart className=" hover:text-blue-400 transition" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
              {count}
            </span>
          </Link>
        </div>

        <button onClick={toggleTheme} className="text-2xl">
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl hover:bg-gray-500 p-2 rounded-4xl"
        >
          <IoReorderThreeOutline />
        </button>

        {isOpen && (
          <div className=" bg-gray-900 absolute top-16 left-0 w-full flex flex-col md:hidden gap-2 p-4 ">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                onClick={() => setIsOpen(false)}
                className={`font-bold rounded p-2 ${
                  location.pathname === tab.path
                    ? "bg-white text-gray-700"
                    : "hover:bg-gray-500"
                }`}
              >
                {tab.name}
              </Link>
            ))}
            <div className="flex items-center">
              <Link to={"/cart"} className="text-3xl relative inline-block">
                <TiShoppingCart className=" hover:text-blue-400 transition" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
                  {count}
                </span>
              </Link>
            </div>
            <button onClick={toggleTheme} className="text-2xl">
              {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
