import Product from "../../widgets/Products/products.interface";
import { PREFIX } from "./helpers/helpers";
const api = {
  getMenu: async () => {
    try {
      const res = await fetch(`${PREFIX}/products`);
      if (!res.ok) throw new Error();

      const data = (await res.json()) as Product[];
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
export default api;
