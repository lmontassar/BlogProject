import { useRef, useState } from "react";
import "./css/signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignUp() {

  const validationSchema = Yup.object({
    fullname: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Fullname can only contain letters and spaces")
      .required("Fullname is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });

  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setTimeout(() => {
        alert("Form submitted successfully!");
      }, 2000);
    },
  });

  return (
    <div className="signup-container">
      <div className="signup-logo">ProBlog</div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Create your account</h2>
        <div className="form-group">
          <label for="fullname">Full Name</label>

          <input
            type="text"
            {...formik.getFieldProps("fullname")}
            id="fullname"
            name="fullname"
            required
            placeholder="Enter your full name"
          />

          {formik.touched.fullname && formik.errors.fullname ? (
            <small className="invalid">{formik.errors.fullname}</small>
          ) : null}
        </div>

        <div className="form-group">
          <label for="email">Email</label>
          <input
            {...formik.getFieldProps("email")}
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email ? (
            <small className="invalid">{formik.errors.email}</small>
          ) : null}
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            {...formik.getFieldProps("password")}
            type="password"
            id="password"
            name="password"
            required
            placeholder="Create a password"
          />
          {formik.touched.password && formik.errors.password ? (
            <small className="invalid">{formik.errors.password}</small>
          ) : null}
        </div>
        <div className="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input
            {...formik.getFieldProps("confirmPassword")}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            placeholder="Confirm your password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <small className="invalid">{formik.errors.confirmPassword}</small>
          ) : null}
        </div>

        <div className="terms">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            required
          />
          <label for="terms">
            I agree to the <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
        <div className="login-link">
          <p>
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
      </form>
    </div>
  );
}
