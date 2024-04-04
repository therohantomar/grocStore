import "./App.css";
import Container from "./components/Container.tsx";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.tsx";
import { RouterProvider } from "react-router-dom";
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";
import Cart from "./components/Cart.tsx";
import { store } from "./utils/store/store.ts";
import { Provider } from "react-redux";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";

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
        path: "about",
        element: <About />,
        errorElement: <div>Page Not Found</div>,
      },
      {
        path: "contact",
        element: <Contact />,
        errorElement: <div>Page Not Found</div>,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <div>Page Not Found</div>,
      },
      {
        path: "signup",
        element: <Signup />,
        errorElement: <div>Page Not Found</div>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
