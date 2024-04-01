import { Outlet } from "react-router-dom";
import Nav from "./Navbar";
import Footer from "./Footer";

const Container = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Container;
