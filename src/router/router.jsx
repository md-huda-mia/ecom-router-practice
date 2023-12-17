import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import CartItems from "../pages/Cart/CartItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://api.escuelajs.co/api/v1/products"),
      },
      {
        path: "/cart",
        element: <CartItems />,
      },
    ],
  },
]);
export default router;
