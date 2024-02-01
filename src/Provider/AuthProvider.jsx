import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase_config";
import axios from "axios";

export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
    }

    const passwordLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email ;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            console.log("Current user", createUser);
            setLoading(false)
            //if user exist then issue a token
            if(currentUser){
                
                axios.post(('http://localhost:5000/jwt'),loggedUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout', loggedUser,  {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }
        })
        return () => {
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user, loading,googleLogIn,  passwordLogin,createUser, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children:PropTypes.object
}