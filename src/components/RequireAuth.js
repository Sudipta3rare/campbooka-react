import { useLocation, Navigate, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

function RequireAuth () {
    
    const location = useLocation();
    const { auth, setAuth } = useAuth();

    return (
        auth?.jwtToken
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;