import "./App.css";
import Container from "./components/Container.tsx";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.tsx";
import { RouterProvider } from "react-router-dom";
import Login from "./components/Login.tsx";
import Cart from "./components/Cart.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <div>Page Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <div>Page Not Found</div>,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <div>Page Not Found</div>,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <div>Page Not Found</div>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
