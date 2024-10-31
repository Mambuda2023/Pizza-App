import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { Sidebar } from "../Sidebar/Sidebar";
export const Layout = () => {
  return (
    <div className={styles["layout"]}>
      <Sidebar />
      <div className={styles["content"]}>
        <Outlet />
      </div>
    </div>
  );
};
