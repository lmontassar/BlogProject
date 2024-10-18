import "./css/login.css" ;
import { Link } from "react-router-dom";
export default function Login(){
    return (
        <div className="login-container">
            <div className="login-logo">ProBlog</div>
            <form className="login-form">
                <h2>Log in to your account</h2>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="Enter your password"/>
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