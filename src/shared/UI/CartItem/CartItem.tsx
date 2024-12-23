import styles from "./CartItem.module.css";
import { CartItemProps } from "./CartItemProps";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store/store";
import { cartActions } from "../../../app/store/cartSlice/cart.slice";
import Minus from "./minus-icon.svg";
import Plus from "./plus-icon.svg";
import Delete from "./delete-icon.svg";
const CartItem = ({ ...props }: CartItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  //Добавление в корзину
  const increase = () => {
    dispatch(cartActions.add(props.id));
  };

  //Удаление из корзины
  const decries = () => {
    dispatch(cartActions.remove(props.id));
  };

  //Полностью удаляет позицию товара
  const remove = () => {
    dispatch(cartActions.delete(props.id));
  };
  return (
    <article className={styles["item"]}>
      <div
        className={styles["image"]}
        style={{ backgroundImage: `url('${props.image}')` }}
      ></div>
      <div className={styles["description"]}>
        <h3 className={styles["name"]}>{props.name}</h3>
        <p className={styles["price"]}>
          {props.price}
          &nbsp;
        </p>
      </div>

      <div className={styles["actions"]}>
        <button className={styles["minus"]} onClick={decries}>
          <img src={Minus} alt="Удалить из корзины" />
        </button>
        <p className={styles["number"]}>{props.count}</p>
        <button className={styles["plus"]} onClick={increase}>
          <img src={Plus} alt="Добавить в корзину" />
        </button>
        <button className={styles["delete"]} onClick={remove}>
          <img src={Delete} alt="Удалить все" />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
