import { useDispatch, useSelector } from "react-redux";
import Heading from "../../shared/UI/Heading/Heading";
import { AppDispatch, RootState } from "../../app/store/store";
import CartItem from "../../shared/UI/CartItem/CartItem";
import { useEffect, useState } from "react";
import Product from "../../widgets/Products/products.interface";
import axios from "axios";
import { PREFIX } from "../../app/api/helpers/helpers";
import styles from "./Card.module.css";
import Button from "../../shared/UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../app/store/cartSlice/cart.slice";

const DELIVERY_FEE = 169;

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((s: RootState) => s.cart.items);
  const jwt = useSelector((s: RootState) => s.user.jwt);

  const navigate = useNavigate();

  const total = items
    .map((i) => {
      const product = cartProducts.find((p) => (p.id = i.id));
      if (!product) {
        return 0;
      }
      return i.count * product.price;
    })
    .reduce((acc, i) => (acc += i), 0);

  const getItem = async (id: number) => {
    const { data } = await axios.get(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const result = await Promise.all(items.map((i) => getItem(i.id)));
    setCartProducts(result);
  };

  const checkout = async () => {
    await axios.post(
      `${PREFIX}/order`,
      {
        products: items,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    dispatch(cartActions.clean());
    navigate("/success");
  };

  useEffect(() => {
    loadAllItems();
  }, [items]);

  return (
    <>
      <Heading className={styles["headline"]}>Корзина</Heading>

      {items.map((i) => {
        const product = cartProducts.find((p) => (p.id = i.id));
        if (!product) {
          return;
        }
        return <CartItem key={product.id} count={i.count} {...product} />;
      })}
      <div className={styles["line"]}>
        <h4 className={styles["text"]}>Итог</h4>
        <p className={styles["price"]}>
          {total}&nbsp;
          <span>р</span>
        </p>
      </div>
      <hr className={styles["hr"]} />
      <div className={styles["line"]}>
        <h4 className={styles["text"]}>Доставка</h4>
        <p className={styles["price"]}>
          {DELIVERY_FEE}&nbsp;
          <span>р</span>
        </p>
      </div>
      <hr className={styles["hr"]} />
      <div className={styles["line"]}>
        <h4 className={styles["text"]}>
          Итог <span className={styles["total-count"]}> ({items.length})</span>
        </h4>
        <p className={styles["price"]}>
          {total + DELIVERY_FEE} &nbsp; <span>р</span>
        </p>
      </div>
      <div className={styles["checkout"]}>
        <Button onClick={checkout} appearance={"big"}>
          Оформить
        </Button>
      </div>
    </>
  );
};
export default Cart;
