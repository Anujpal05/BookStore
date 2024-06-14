import { useContext , createContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider ({children}){
    const intialAuthUser = localStorage.getItem("Users");
    const [authUser, setauthUser] = useState(
        intialAuthUser ? JSON.parse(intialAuthUser) : undefined
    );
    return(
        <AuthContext.Provider value={[authUser,setauthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = ()=> useContext(AuthContext);