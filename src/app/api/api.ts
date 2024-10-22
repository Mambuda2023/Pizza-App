import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Product from "../../widgets/Products/products.interface";
import { PREFIX } from "./helpers/helpers";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: PREFIX }),
  endpoints: (builder) => ({
    getMenu: builder.query<Product, []>({
      query: () => `${PREFIX}/products`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMenuQuery } = api;
