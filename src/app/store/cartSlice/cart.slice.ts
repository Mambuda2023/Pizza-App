import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./cartState";

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        state.items.push({ id: action.payload, count: 1 });
        return;
      }
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.count++;
        }
        return i;
      });
    },
  },
});
export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
