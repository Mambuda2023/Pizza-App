import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "./reset.css";
import { router } from "./App/Routes";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
