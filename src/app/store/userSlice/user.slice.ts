import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./userState";
import { login } from "./userAsyncThunk";
import LoginResponse from "../../../pages/Auth/auth.interface";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
    logout: (state) => {
      state.jwt = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<LoginResponse>) => {
        state.jwt = action.payload.access_token;
      }
    ),
      builder.addCase(login.rejected, (state, action) => {});
  },
});
export default userSlice.reducer;
export const userActions = userSlice.actions;
