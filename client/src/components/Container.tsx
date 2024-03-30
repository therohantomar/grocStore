import { Outlet } from "react-router-dom";
import Nav from "./Navbar";

const Container = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Container;
