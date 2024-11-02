import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);
export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const login = async (e,values)=>{
        e.preventDefault();
        try{
            let res = await fetch("http://localhost:8089/api/user/login", {
                method : 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(values)
            } )
            if (!res.ok) {
                setErrorMessage("Login failed. Please check your credentials.");
                throw new Error("Login failed. Please check your credentials.");
              }
            const data = await res.json();
            if(data.token) {
                console.log("connect successful");
                localStorage.setItem("token",data.token);
                let u  = {
                    id: data.token.id,
                    fullname: data.token.fullname,
                    email: data.token.email,
                }
                setUser(u);
                navigate("/");
            }

        }catch(e){
            console.log(e);
            console.log("error");
        }
    }

    const logout = () => {
        localStorage.clear();
        setUser(null);
    }
    let isLoggedIn = !!user;
    useEffect(() => {

        const token = localStorage.getItem("token");
        if(token && !user){
            const Jtoken = jwtDecode(token);
            let u  = {
                id: Jtoken.id,
                fullname: Jtoken.fullname,
                email: Jtoken.email,
            }
            // setUser();
            setUser(u);
        }
        isLoggedIn = !!user;
    });
    return (
        <AuthContext.Provider value={{ user, login, logout, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth= ()=>{
    return useContext(AuthContext);
}