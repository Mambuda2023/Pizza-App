import ProductCard from "../../../entites/ProductCard/ProductCard";
import { MenuListProps } from "./menu.list.props";

const MenuList = ({ product }: MenuListProps) => {
  return product?.map((item) => (
    <ProductCard
      key={item.id}
      id={item.id}
      description={item.ingredients.join(", ")}
      img={item.image}
      price={item.price}
      rating={item.rating}
      name={item.name}
    />
  ));
};
export default MenuList;
