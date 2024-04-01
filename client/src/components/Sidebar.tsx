import { IoMdClose } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

type SidebarProps = {
  open: boolean;
  setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ open, setIsopen }: SidebarProps) => {
  const sidebarStyles = `${
    open ? "w-[80%]" : ""
  } flex flex-col items-center font-pitagon-400 justify-center transition-all shadow-2xl duration-300 fixed left-0 top-0 bottom-0 z-10 w-[30%] h-full bg-white`;

  const overlayStyles = `${
    open ? "opacity-100" : ""
  } w-full h-[70%] bg-gray-50 opacity-50 transition-opacity duration-300`;

  const linkStyles =
    "text-center font-semibold text-xl text-gray-900 hover:text-indigo-600 transition-colors duration-200 p-3 rounded-lg bg-gray-100";

  return (
    <section className="relative flex flex-row-reverse">
      <div className={sidebarStyles}>
        <IoMdClose
          className="text-3xl cursor-pointer"
          onClick={() => setIsopen(!open)}
        />
        <div className={overlayStyles}>
          <div className="flex flex-col items-center justify-center w-full h-full gap-5">
            <Link
              onClick={() => setIsopen(!open)}
              to="/"
              className={linkStyles}
            >
              Home
            </Link>
            <Link
              onClick={() => setIsopen(!open)}
              to="/about"
              className={linkStyles}
            >
              About
            </Link>
            <Link
              onClick={() => setIsopen(!open)}
              to="/contact"
              className={linkStyles}
            >
              Contact
            </Link>
            <Link
              onClick={() => setIsopen(!open)}
              to="/login"
              className={linkStyles}
            >
              Login
            </Link>
            <Link
              onClick={() => setIsopen(!open)}
              to="/cart"
              className={`${linkStyles} flex items-center`}
            >
              <IoMdCart className="mr-2 text-2xl" />
              Cart
            </Link>
          </div>
        </div>
      </div>
      <IoIosMenu
        className="text-4xl text-gray-700 cursor-pointer"
        onClick={() => setIsopen(!open)}
      />
    </section>
  );
};

export default Sidebar;
