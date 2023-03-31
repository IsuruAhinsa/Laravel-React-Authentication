import { createSlice } from "@reduxjs/toolkit";
import { Loading, Notify } from "notiflix";
import {
  forgotPassword,
  resetPassword,
  userLogin,
  userRegister,
} from "../../app/actions/authActions";

const initialState = {
  userToken: localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : null,
  userInfo: null,
  errors: {},
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      state.userInfo = action.payload;
    },
    LOGOUT: (state) => {
      localStorage.removeItem("userToken");
      state.userInfo = null;
      state.errors = {};
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(userRegister.pending, (state) => {
      state.errors = {};
      Loading.hourglass();
    });
    builder.addCase(userRegister.fulfilled, (state) => {
      Loading.remove();
      state.success = true;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      Loading.remove();
      state.errors = Object.values(action.payload).reduce(
        (previous, current) => [...previous, ...current],
        []
      );
    });

    // Login
    builder.addCase(userLogin.pending, (state) => {
      state.errors = {};
      Loading.hourglass();
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      Loading.remove();
      state.userInfo = action.payload;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      Loading.remove();
      state.errors = Object.values(action.payload).reduce(
        (previous, current) => [...previous, ...current],
        []
      );
    });

    // Forgot Password
    builder.addCase(forgotPassword.pending, (state) => {
      state.errors = {};
      Loading.hourglass();
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      Loading.remove();
      state.success = true;
      Notify.success(action.payload.message);
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      Loading.remove();
      state.errors = Object.values(action.payload).reduce(
        (previous, current) => [...previous, ...current],
        []
      );
    });

    // Reset Password
    builder.addCase(resetPassword.pending, (state) => {
      state.errors = {};
      Loading.hourglass();
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      Loading.remove();
      state.success = true;
      Notify.success(action.payload.message);
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      Loading.remove();
      state.errors = Object.values(action.payload).reduce(
        (previous, current) => [...previous, ...current],
        []
      );
    });
  },
});

export const { SET_ACTIVE_USER, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
