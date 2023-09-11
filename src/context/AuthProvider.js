import { createContext, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const jwtToken = new Cookies().get("JWT");
    const [auth, setAuth] = useState( jwtToken ? {jwtToken} : {} );

    return (
        <AuthContext.Provider value={{ auth, setAuth }} >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;