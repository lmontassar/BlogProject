import { useFormik } from "formik";
import "./css/login.css" ;
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "./AuthProvider";

export default function Login(){


    const validationInputs = Yup.object({
        email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
        password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });
    const initValues = {
        "email":"",
        "password":""
    }

    const auth = useAuth();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues : initValues,
        validationSchema:validationInputs,
        onSubmit : (values) => 
            {
                console.log(values);
            }
        
    })


    return (
        <div className="login-container">
            <div className="login-logo">ProBlog</div>
            <form className="login-form" onSubmit={(e)=>auth.login(e,formik.values)}>
                <h2>Log in to your account</h2>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input  {...formik.getFieldProps("email")} type="email" id="email" name="email" required placeholder="Enter your email"/>
                    {formik.touched.email && formik.errors.email ? (
                        <small className="invalid">{formik.errors.email}</small>
                    ) : null}
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input {...formik.getFieldProps("password")} type="password" id="password" name="password" required placeholder="*************"/>
                    {formik.touched.password && formik.errors.password ? (
                        <small className="invalid">{formik.errors.password}</small>
                    ) : null}
                </div>
                <div className="remember-forgot">
                    <div className="remember-me">
                        <input type="checkbox" id="remember" name="remember"/>
                        <label for="remember">Remember me</label>
                    </div>
                    <a href="#" className="forgot-password">Forgot password?</a>
                </div>
                <button type="submit" className="submit-btn">Log In</button>
                <div className="signup-link">
                    <p>Don't have an account? <Link to="/SignUp" ><a>Sign up</a></Link></p>
                </div>
            </form>
        </div>
    );
}