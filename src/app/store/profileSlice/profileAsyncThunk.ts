import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { PREFIX } from "../../api/helpers/helpers";
import { Profile } from "../userSlice/userInterface";
import { RootState } from "../store";

export const getProfile = createAsyncThunk<Profile, void, { state: RootState }>(
  "user/profile",
  async (_, thunkApi) => {
    const jwt = thunkApi.getState().user.jwt;
    const { data } = await axios.get<Profile>(`${PREFIX}/user/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return data;
  }
);
