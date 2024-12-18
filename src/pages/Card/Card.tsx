import { useSelector } from "react-redux";
import Heading from "../../shared/UI/Heading/Heading";
import { RootState } from "../../app/store/store";
import CartItem from "../../shared/UI/CartItem/CartItem";
import { useEffect, useState } from "react";
import Product from "../../widgets/Products/products.interface";
import axios from "axios";
import { PREFIX } from "../../app/api/helpers/helpers";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const items = useSelector((s: RootState) => s.cart.items);

  ////
  const getItem = async (id: number) => {
    const { data } = await axios.get(`${PREFIX}/products/${id}`);
    return data;
  };

  const loadAllItems = async () => {
    const result = await Promise.all(items.map((i) => getItem(i.id)));
    setCartProducts(result);
  };
  useEffect(() => {
    loadAllItems();
  }, [items]);
  return (
    <>
      <Heading>Корзина</Heading>

      {items.map((i) => {
        const product = cartProducts.find((p) => (p.id = i.id));
        if (!product) {
          return;
        }
        return <CartItem count={i.count} {...product} />;
      })}
    </>
  );
};
export default Cart;
