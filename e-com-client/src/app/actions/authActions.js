import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../axios";

const url = import.meta.env.VITE_BACKEND_URL;

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password, remember }, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post(`${url}/login`, {
        email,
        password,
        remember,
      });

      // store user's token in local storage
      localStorage.setItem("userToken", data.token);
      return data.user;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors);
      } else if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    { name, email, password, password_confirmation },
    { rejectWithValue }
  ) => {
    try {
      await axiosClient.post(`${url}/register`, {
        name,
        email,
        password,
        password_confirmation,
      });
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post(
        `${url}/password/forgot-password`,
        { email }
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors);
      } else if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (
    { password, password_confirmation, token, email },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosClient.post(
        `${url}/password/reset-password`,
        { email, password, password_confirmation, token }
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return rejectWithValue(error.response.data.errors);
      } else if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
