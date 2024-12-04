import { createAsyncThunk } from "@reduxjs/toolkit";
import { PREFIX } from "../../api/helpers/helpers";
import axios, { AxiosError } from "axios";
import LoginResponse from "../../../pages/Auth/auth.interface";

export const register = createAsyncThunk(
  "user/register",
  async (params: { email: string; password: string; name: string }) => {
    try {
      const { data } = await axios.post<LoginResponse>(
        `${PREFIX}/auth/register`,
        {
          email: params.email,
          password: params.password,
          name: params.name,
        }
      );
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
    }
  }
);
