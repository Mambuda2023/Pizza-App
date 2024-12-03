import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../shared/UI/Button/Button";
import cn from "classnames";
import styles from "./Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store/store";
import { userActions } from "../../app/store/userSlice/user.slice";
import { useEffect } from "react";
import { getProfile } from "../../app/store/profileSlice/profileAsyncThunk";
export const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((s: RootState) => s.user.profile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const logout = () => {
    dispatch(userActions.logout());
    navigate("/auth/login");
  };
  return (
    <section className={styles["sidebar"]}>
      <article className={styles["user"]}>
        <img src="/public/Avatar.png" alt="Avatar Icon" />
        <footer className={styles["user-footer"]}>
          <h2 className={styles["name"]}>{profile?.name}</h2>
          <p className={styles["email"]}>{profile?.email}</p>
        </footer>
      </article>
      <ul className={styles["menu"]}>
        <li className={styles["menu__item"]}>
          <NavLink
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
            to="/"
          >
            <img src="/public/menu-icon.svg" alt="Иконка меню" />
            Меню
          </NavLink>
        </li>
        <li className={styles["menu__item"]}>
          <NavLink
            className={({ isActive }) =>
              cn(styles["link"], {
                [styles.active]: isActive,
              })
            }
            to="/cart"
          >
            <img src="/public/cart-icon.svg" alt="Иконка корзины" />
            Корзина
          </NavLink>
        </li>
      </ul>
      <Button className={styles["exit"]} appearance="small" onClick={logout}>
        <img src="/public/exit-icon.svg" alt="Иконка выхода" />
        Выйти
      </Button>
    </section>
  );
};
