import { useLoaderData } from "react-router-dom";
import Products from "../../widgets/Products/products.interface";

const Product = () => {
  const data = useLoaderData() as Products;
  return <>Product-{data.id}</>;
};
export default Product;
