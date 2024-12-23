import { configureStore } from "@reduxjs/toolkit";
import { saveState } from "./storage";
import { JWT_PERSISTENT } from "./userSlice/userState";
import userSlice from "./userSlice/user.slice";
import cartSlice from "./cartSlice/cart.slice";
import { CART_PERSISTENT_STATE } from "./cartSlice/cartState";

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});
store.subscribe(() => {
  saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTENT);
  saveState(store.getState().cart, CART_PERSISTENT_STATE);
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
