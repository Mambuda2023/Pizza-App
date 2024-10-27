import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./app/routes";

import "./index.css";
import "./reset.css";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
