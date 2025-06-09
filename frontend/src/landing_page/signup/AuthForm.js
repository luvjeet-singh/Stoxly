import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import AuthFields from "./AuthFields";
import ModeToggle from "./ModeToggle";

const AuthForm = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signup");
  const [cookies, removeCookie] = useCookies([]);
  const isSignup = mode === "signup";

  const backendURL =
    process.env.NODE_ENV === "production"
      ? "https://stoxly-backend.onrender.com"
      : "http://localhost:3002";

  const dashboardURL =
    process.env.NODE_ENV === "production"
      ? "https://stoxly-backend.onrender.com"
      : "http://localhost:3000";

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!cookies.token) return;

        const { data } = await axios.post(
          `${backendURL}/verify`,
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        if (status) {
          navigate("/"); // stays in dashboard
        } else {
          removeCookie("token");
        }
      } catch (err) {
        removeCookie("token");
      }
    };

    verifyToken();
  }, [cookies, navigate, removeCookie, backendURL]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      ...(isSignup && {
        username: Yup.string()
          .min(3, "Username must be at least 3 characters")
          .required("Username is required"),
      }),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(3, "Password must be at least 3 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { resetForm, setFieldError }) => {
      try {
        const url = `${backendURL}/${isSignup ? "signup" : "login"}`;

        const payload = isSignup
          ? values
          : { email: values.email, password: values.password };

        const { data } = await axios.post(url, payload, {
          withCredentials: true,
        });

        const { success, message } = data;

        if (success) {
          resetForm();
          window.location.href = dashboardURL;
        } else {
          if (message === "User already exists") {
            setFieldError("email", message);
          }
        }
      } catch (error) {
        if (error.response?.data?.message === "User already exists") {
          setFieldError("email", "User already exists");
        } else {
          console.error("Submission error:", error);
        }
      }
    },
  });

  return (
    <>
      <h1>{isSignup ? "Signup now" : "Login"}</h1>
      <form onSubmit={formik.handleSubmit} noValidate>
        <AuthFields formik={formik} isSignup={isSignup} />
        <button type="submit" className="btn btn-primary">
          {isSignup ? "Signup" : "Login"}
        </button>
      </form>
      <ModeToggle isSignup={isSignup} setMode={setMode} />
    </>
  );
};

export default AuthForm;
