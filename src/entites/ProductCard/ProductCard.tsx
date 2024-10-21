import { ProductCardProps } from "./ProductCard.props";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
const ProductCard = ({
  id,
  title,
  description,
  img,
  price,
  rating,
}: ProductCardProps) => {
  return (
    <article className={styles["card"]}>
      <Link to={`/product/${id}`}>
        <header
          className={styles["head"]}
          style={{ backgroundImage: `url('${img}')` }}
        >
          <p className={styles["price"]}>
            {price}
            &nbsp;
            <span className={styles["currency"]}>Р</span>
          </p>
          <button className={styles["add-to-cart"]}>
            <img src="/cart-button-icon.svg" alt="Добавить в корзину" />
          </button>
          <div className={styles["rating"]}>
            {rating}&nbsp;
            <img src="/public/cart-rating-icon.svg" alt="Рейтинг" />
          </div>
        </header>
        <footer className={styles["footer"]}>
          <h2 className={styles["title"]}>{title}</h2>
          <p className={styles["description"]}>{description}</p>
        </footer>
      </Link>
    </article>
  );
};
export default ProductCard;
