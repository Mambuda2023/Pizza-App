import { ProductCardProps } from "./ProductCard.props";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store/store";
import { cartActions } from "../../app/store/cartSlice/cart.slice";
import { MouseEvent } from "react";
const ProductCard = (props: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const add = (e: MouseEvent) => {
    e?.preventDefault();
    dispatch(cartActions.add(props.id));
  };
  return (
    <article className={styles["card"]}>
      <Link to={`/product/${props.id}`}>
        <header
          className={styles["head"]}
          style={{ backgroundImage: `url('${props.img}')` }}
        >
          <p className={styles["price"]}>
            {props.price}
            &nbsp;
            <span className={styles["currency"]}>Р</span>
          </p>
          <button className={styles["add-to-cart"]} onClick={add}>
            <img src="/cart-button-icon.svg" alt="Добавить в корзину" />
          </button>
          <div className={styles["rating"]}>
            {props.rating}&nbsp;
            <img src="/public/cart-rating-icon.svg" alt="Рейтинг" />
          </div>
        </header>
        <footer className={styles["footer"]}>
          <h2 className={styles["title"]}>{props.name}</h2>
          <p className={styles["description"]}>{props.description}</p>
        </footer>
      </Link>
    </article>
  );
};
export default ProductCard;
