import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes({logged=""}) {
    const isLoggedIn = !!localStorage.getItem("token");
    if(logged == ""){
        return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
    } else {
        return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
    }

}