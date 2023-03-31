import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetUserDetailsQuery } from "../app/services/authService";
import axiosClient from "../axios";
import { LOGOUT, SET_ACTIVE_USER } from "../features/auth/authSlice";

export const TopNavigation = ({ currencies }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const url = import.meta.env.VITE_BACKEND_URL;

  const dispatch = useDispatch();

  // automatically authenticate user if token is found
  const { data, isLoading } = useGetUserDetailsQuery("userDetails", {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });

  useEffect(() => {
    if (data) {
      dispatch(SET_ACTIVE_USER(data));
    }
  }, [data, dispatch]);

  const handleLogout = (e) => {
    e.preventDefault();

    axiosClient.get(`${url}/logout`).then(() => {
      dispatch(LOGOUT());
    });
  };

  return (
    <>
      {/* Top navigation */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
          {/* Currency selector */}
          <form className="hidden lg:block lg:flex-1">
            <div className="flex">
              <label htmlFor="desktop-currency" className="sr-only">
                Currency
              </label>
              <div className="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                <select
                  id="desktop-currency"
                  name="currency"
                  className="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
                >
                  {currencies.map((currency) => (
                    <option key={currency}>{currency}</option>
                  ))}
                </select>
                <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 text-gray-300"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 8l4 4 4-4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </form>

          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 text-white">
            {isLoading ? (
              `Loading...`
            ) : userInfo ? (
              <>
                <p className="font-medium">
                  Logged in as {userInfo.email}
                  <span
                    onClick={handleLogout}
                    className="ml-3 text-blue-500 underline hover:cursor-pointer"
                  >
                    Logout
                  </span>
                </p>
              </>
            ) : (
              <>
                <Link
                  to="register"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Create an account
                </Link>
                <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
                <Link
                  to="login"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Sign in
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
