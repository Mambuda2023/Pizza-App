import { createBrowserRouter } from "react-router-dom";
import { Menu } from "../pages/Menu/Menu";
import Card from "../pages/Card/Card";
import { App } from "../app/App";
import ErrorBoundary from "../pages/Error/Error";
import Product from "../pages/Product/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { element: <Menu />, path: "/" },

      {
        path: "/cart",
        element: <Card />,
      },
      {
        path: "/product/id",
        element: <Product />,
      },
    ],
  },
]);
