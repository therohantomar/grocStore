// import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="text-white font-semibold text-xl fixed w-full">
      <div className="flex justify-between items-center p-5 bg-slate-700">
        <span>logo</span>
        <ul className="flex items-center gap-5">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Contact </li>
          <li className="cursor-pointer">Sing in</li>
          <li className="cursor-pointer ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
              />
            </svg>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
