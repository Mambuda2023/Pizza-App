import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import LoginResponse from "../../../pages/Auth/auth.interface";
import { PREFIX } from "../../api/helpers/helpers";

export const login = createAsyncThunk(
  "user/login",
  async (params: { email: string; password: string }) => {
    try {
      const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
        email: params.email,
        password: params.password,
      });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
    }
  }
);
