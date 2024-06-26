import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store/store";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { baskets } = useSelector((state: RootState) => state.basket);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md font-pitagon-400">
      <div className="container flex items-center justify-between px-4 py-2 mx-auto">
        <h1 className="text-xl font-semibold text-gray-900 transition-colors duration-200 hover:text-indigo-600">
          Groc<span className="text-pink-600">Store</span>
        </h1>
        <ul className="items-center hidden gap-8 mx-4 lg:flex">
          <li>
            <Link
              to="/"
              className="transition-colors duration-200 text-md hover:text-indigo-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="transition-colors duration-200 text-md hover:text-indigo-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="transition-colors duration-200 text-md hover:text-indigo-600"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="transition-colors duration-200 text-md hover:text-indigo-600"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="transition-colors duration-200 text-md hover:text-indigo-600"
            >
              <div className="relative inline-block">
                <IoMdCart className="text-2xl" />
                <span
                  className={`absolute -top-2 -right-4 rounded-full bg-indigo-500 text-white text-xs font-semibold  px-2 py-1`}
                >
                  {baskets.length}
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="transition-colors duration-200 cursor-pointer lg:hidden hover:text-gray-400">
          <RxHamburgerMenu
            onClick={() => setOpen(!open)}
            className="text-3xl"
          />
        </div>
        {open && <Sidebar {...{ open, setIsopen: setOpen }} />}
      </div>
    </nav>
  );
};

export default Nav;
