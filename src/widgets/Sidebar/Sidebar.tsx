import { NavLink } from "react-router-dom";
import Button from "../../shared/UI/Button/Button";
import styles from './Sidebar.module.css'
export const Sidebar =()=>{
    return  <section className={styles["sidebar"]}>
    <article className={styles["user"]}>
      <img src="/public/Avatar.png" alt="Avatar Icon" />
      <footer className={styles['user-footer']}>
        <h2 className={styles["name"]}>Мазманян Юрий</h2>
        <p className={styles["email"]}>mambuda@gmail.com</p>
      </footer>
    </article>
    <ul className={styles["menu"]}>
      <li className={styles["menu__item"]}>
        <NavLink className={styles["menu__item-link"]} to="/">
          <img src="/public/menu-icon.svg" alt="Иконка меню" />
          Меню
        </NavLink>
      </li>
      <li className={styles["menu__item"]}>
        <NavLink className={styles["menu__item-link"]} to="/cart">
          <img src="/public/cart-icon.svg" alt="Иконка корзины" />
          Корзина
        </NavLink>
      </li>
    </ul>
    <Button className={styles["exit"]} appearance="small">
      <img src="/public/exit-icon.svg" alt="Иконка выхода" />
      Выйти
    </Button>
  </section>
}