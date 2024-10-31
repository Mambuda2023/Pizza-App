import { createBrowserRouter, defer } from "react-router-dom";
import { lazy, Suspense } from "react";
import axios from "axios";
import { PREFIX } from "./api/helpers/helpers";

import AuthLayout from "../pages/Auth/AuthLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RequiredAuth from "./api/helpers/RequiredAuth/RequiredAuth";
import Card from "../pages/Card/Card";
import { App } from "../app/App";
import ErrorBoundary from "../pages/Error/Error";
import Product from "../pages/Product/Product";

const Menu = lazy(() => import("../pages/Menu/Menu"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequiredAuth>
        <App />
      </RequiredAuth>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <Menu />
          </Suspense>
        ),
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
          return defer({
            data: new Promise((resolve, reject) => {
              setTimeout(() => {
                axios
                  .get(`${PREFIX}/products/${params.id}`)
                  .then((data) => resolve(data))
                  .catch((error) => reject(error));
              }, 2000);
            }),
          });
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Register />,
      },
    ],
  },
]);
export default router;
