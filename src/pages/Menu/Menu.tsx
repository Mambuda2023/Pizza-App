import { useEffect, useState } from "react";
import { useGetMenuQuery } from "../../app/api/api";
import ProductCard from "../../entites/ProductCard/ProductCard";
import Heading from "../../shared/UI/Heading/Heading";
import Search from "../../shared/UI/Search/Search";
import styles from "./Menu.module.css";
import Product from "../../widgets/Products/products.interface";

export function Menu() {
  const { data: productList, isLoading, isError } = useGetMenuQuery([]);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => setProducts(productList), [productList]);
  return (
    <>
      <div className={styles["head"]}>
        <Heading children="Menu" />
        <Search placeholder="ВВедите блюдо или состав" />
      </div>
      <div>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            description={product.ingredients.join(", ")}
            img={product.image}
            price={product.price}
            rating={product.rating}
            name={product.name}
          />
        ))}
      </div>
    </>
  );
}
