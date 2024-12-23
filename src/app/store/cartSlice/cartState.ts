import { loadState } from "../storage";

import { CartState } from "./cartInterface";
export const CART_PERSISTENT_STATE = "cartData";
export const initialState: CartState = loadState<CartState>(
  CART_PERSISTENT_STATE
) ?? {
  items: [],
};
