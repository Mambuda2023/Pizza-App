import { useEffect, useState } from "react";
import Heading from "../../shared/UI/Heading/Heading";
import Search from "../../shared/UI/Search/Search";
import styles from "./Menu.module.css";
import Product from "../../widgets/Products/products.interface";
import MenuList from "./MenuList/MenuList";
import axios, { AxiosError } from "axios";
import { PREFIX } from "../../app/api/helpers/helpers";

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>("");
  const getMenu = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      if (error instanceof AxiosError) {
        setError(error.message);
      }
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <header className={styles["head"]}>
        <Heading children="Menu" />
        <Search placeholder="ВВедите блюдо или состав" />
      </header>
      <div>
        {error && <>{error}</>}
        {!isLoading && <MenuList product={products} />}
        {isLoading && <h2>Загружаем продукт...</h2>}
      </div>
    </>
  );
}

export default Menu;
