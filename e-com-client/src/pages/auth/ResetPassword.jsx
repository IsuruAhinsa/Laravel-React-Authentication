import React, { useEffect } from "react";
import ResetPasswordForm from "../../features/auth/ResetPasswordForm";
import { Errors } from "../../components/Errors";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { errors, success } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (success) navigate("/login");
  }, [success, navigate]);

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Reset Your Password
          </h2>

          {errors.length > 0 && <Errors errors={errors} />}
        </div>
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
