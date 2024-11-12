import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import LoginResponse from "../../../pages/Auth/auth.interface";
import { PREFIX } from "../../api/helpers/helpers";

export const login = createAsyncThunk(
  "user/login",
  async (params: { email: string; password: string }) => {
    const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
      email: params.email,
      password: params.password,
    });
    return data;
  }
);
