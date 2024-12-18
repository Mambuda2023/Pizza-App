import styles from "./CartItem.module.css";
import { CartItemProps } from "./CartItemProps";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store/store";
import { cartActions } from "../../../app/store/cartSlice/cart.slice";
const CartItem = ({ ...props }: CartItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  //Добавление в корзину
  const increase = () => {
    dispatch(cartActions.add(props.id));
  };

  //Удаление из корзины
  const decries = () => {};

  //Полностью удаляет позицию товара
  const remove = () => {};
  return (
    <article className={styles["item"]}>
      <div
        className={styles["image"]}
        style={{ backgroundImage: `url('${props.image}')` }}
      ></div>
      <p className={styles["description"]}>
        <div className={styles["name"]}>{props.name}</div>
        <div className={styles["currency"]}>
          {props.price}
          &nbsp;
        </div>
      </p>

      <div className={styles["actions"]}>
        <button className={styles["button"]} onClick={decries}>
          <img src="/cart-button-icon.svg" alt="Удалить из корзины" />
        </button>
        <p>{props.count}</p>
        <button className={styles["button"]} onClick={increase}>
          <img src="/cart-button-icon.svg" alt="Добавить в корзину" />
        </button>
        <button className={styles["remove"]} onClick={remove}>
          <img src="/cart-button-icon.svg" alt="Удалить все" />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
