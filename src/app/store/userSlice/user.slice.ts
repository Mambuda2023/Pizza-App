import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./userState";
import { login } from "./userAsyncThunk";

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
    clearLoginError: (state) => {
      state.loginErrorMessage = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
      state.jwt = action.payload.access_token;
    }),
      builder.addCase(login.rejected, (state, action) => {
        state.loginErrorMessage = action.error.message;
      });
  },
});
export default userSlice.reducer;
export const userActions = userSlice.actions;
