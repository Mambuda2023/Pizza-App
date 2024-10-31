import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  JWT: string | null;
}

const initialState: UserState = {
  JWT: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>) => {
      state.JWT = "done";
    },
    logout: (state) => {
      state.JWT = null;
    },
  },
});
export default userSlice.reducer;
export const userActions = userSlice.actions;
