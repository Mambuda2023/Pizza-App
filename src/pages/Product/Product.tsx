import { Await, useLoaderData } from "react-router-dom";
import Products from "../../widgets/Products/products.interface";
import { Suspense } from "react";

const Product = () => {
  const data = useLoaderData() as { data: Products };
  return (
    <Suspense fallback={"Загружаем..."}>
      <Await resolve={data.data}>
        {({ data }: { data: Products }) => <>Product-{data.id}</>}
      </Await>
    </Suspense>
  );
};
export default Product;
