import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function Navbar(){
    const [MenuIsActive,Acitvate] = useState(false);
    const auth = useAuth();
    return (
        <div style={{
            display : "flex",
            justifyContent: "center"
        }}>
            <nav className={MenuIsActive == false ? "container navbar" : "container navbar active"}>
                <div  className="container navbar-content">
                    <a href="#" className="logo">ProBlog</a>

                    <div className={MenuIsActive == false ? "nav-links" : "nav-links active" }>
                        
                        <Link to="" ><a>Home</a></Link>
                        <Link to="" ><a>Add Blog</a></Link>
                        { !auth.isLoggedIn && (
                        <Link to="/Login" ><a className="connect-link"><FaUserCircle className="icon" />Login</a></Link>
                        )}
                        {auth.isLoggedIn && (
                        <Link to="/Login" onClick={auth.logout} ><a className="connect-link">Logout</a></Link>
                        )}
                        </div>
                       
                    <div className="menu-toggle" onClick={ ()=>{Acitvate(!MenuIsActive)} }><HiMenu /></div>
                </div>
            </nav>
        </div>
    );
}