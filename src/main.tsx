import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./app/Routes";

import "./index.css";
import "./reset.css";
import { store } from "./app/store/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
