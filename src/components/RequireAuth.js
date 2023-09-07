import { useLocation, Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import Cookies from "universal-cookie";

function RequireAuth () {
    const { auth, setAuth } = useAuth();
    const location = useLocation();
    
    const cookies = new Cookies();
    const token = cookies.get("JWT");
    token && setAuth({"jwtToken": token});

    return (
        auth?.jwtToken 
            ? <Outlet /> 
            : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;