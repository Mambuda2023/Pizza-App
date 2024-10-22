import { useGetMenuQuery } from "../../app/api/api";
import ProductCard from "../../entites/ProductCard/ProductCard";
import Heading from "../../shared/UI/Heading/Heading";
import Search from "../../shared/UI/Search/Search";
import Product from "../../widgets/Products/products.interface";
import styles from "./Menu.module.css";

export function Menu() {
  const { data } = useGetMenuQuery([]);
  console.log(data);
  return (
    <>
      <div className={styles["head"]}>
        <Heading children="Menu" />
        <Search placeholder="ВВедите блюдо или состав" />
      </div>
      <div>
        <ProductCard
          id={1}
          title="Наслаждение"
          description="Салями, руккола,помидор, оливки"
          rating={4.5}
          price={300}
          img="/public/product-demo.png"
        />
      </div>
    </>
  );
}
