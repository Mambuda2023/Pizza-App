import { createBrowserRouter } from "react-router-dom";
import { Menu } from "../pages/Menu/Menu";
import Card from "../pages/Card/Card";
import { App } from "../app/App";
import ErrorBoundary from "../pages/Error/Error";
import Product from "../pages/Product/Product";
import axios from "axios";
import { PREFIX } from "./api/helpers/helpers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <Menu />,
        path: "/",
      },
      {
        path: "/cart",
        element: <Card />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
          return data;
        },
      },
    ],
  },
]);
export default router;
