import { useEffect, useState } from "react";
import { useGetMenuQuery } from "../../app/api/api";
import Heading from "../../shared/UI/Heading/Heading";
import Search from "../../shared/UI/Search/Search";
import styles from "./Menu.module.css";
import Product from "../../widgets/Products/products.interface";
import MenuList from "./MenuList/MenuList";

export function Menu() {
  const { data: productList, isLoading, isError } = useGetMenuQuery([]);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => setProducts(productList), [productList]);
  // console.log(products);
  return (
    <>
      <header className={styles["head"]}>
        <Heading children="Menu" />
        <Search placeholder="ВВедите блюдо или состав" />
      </header>
      <div>
        {isError && <>{isError}</>}
        {!isLoading && <MenuList product={products} />}
        {isLoading && <h2>Загружаем продукт...</h2>}
      </div>
    </>
  );
}
