import { createBrowserRouter } from "react-router-dom";
import { Menu } from "../pages/Menu/Menu";
import Card from "../pages/Card/Card";
import { App } from "./App";
import ErrorBoundary from "../pages/Error/Error";

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
    ],
  },
]);
