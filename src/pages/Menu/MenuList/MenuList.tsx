import ProductCard from "../../../entites/ProductCard/ProductCard";
import { MenuListProps } from "./menu.list.props";
import styles from "./MenuList.module.css";
const MenuList = ({ product }: MenuListProps) => {
  return (
    <div className={styles.wrapper}>
      {product?.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          description={item.ingredients.join(", ")}
          img={item.image}
          price={item.price}
          rating={item.rating}
          name={item.name}
        />
      ))}
    </div>
  );
};
export default MenuList;
