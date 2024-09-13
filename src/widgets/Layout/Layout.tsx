import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { Sidebar } from "../Sidebar/Sidebar";
export const Layout = () => {
  return (
    <div className={styles["layout"]}>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
