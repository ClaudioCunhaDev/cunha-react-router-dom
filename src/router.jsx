import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { Cart } from "./Pages/Cart";
import { Admin } from "./Pages/Admin";
import { RootLayout } from "./Pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;
