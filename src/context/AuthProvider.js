import { createContext, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const cookies = new Cookies();
    const jwtToken = cookies.get("JWT");
    const email = cookies.get("email");
    const role = cookies.get("role");

    const [auth, setAuth] = useState( jwtToken ? {jwtToken, email, role} : {} );

    return (
        <AuthContext.Provider value={{ auth, setAuth }} >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;