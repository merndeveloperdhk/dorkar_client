import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useHook = () => {
    const useAuth = useContext(AuthContext)
    return useAuth;
};

export default useHook;