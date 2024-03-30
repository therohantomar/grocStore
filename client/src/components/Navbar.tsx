import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const Nav = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container flex items-center justify-between px-4 py-2 mx-auto">
        <h1 className="text-xl font-semibold text-gray-900 transition-colors duration-200 hover:text-indigo-600">
          Groc<span className="text-pink-600">Store</span>
        </h1>
        <ul className="flex items-center gap-8 mx-10">
          <li>
            <Link
              to="/"
              className="font-semibold uppercase transition-colors duration-200 text-md hover:text-indigo-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-semibold uppercase transition-colors duration-200 text-md hover:text-indigo-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-semibold uppercase transition-colors duration-200 text-md hover:text-indigo-600"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="font-semibold uppercase transition-colors duration-200 text-md hover:text-indigo-600"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="font-semibold uppercase transition-colors duration-200 text-md hover:text-indigo-600"
            >
              <IoMdCart className="text-xl" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
