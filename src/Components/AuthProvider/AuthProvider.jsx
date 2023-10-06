import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword, signOut, } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

export const TravelAuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email,password);
    }

    // signOut user
    const logOut = () =>{
        return signOut(auth);
    }




    //current user
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, currenUser=>{
            console.log("User is in onAuthStateChanged ", currenUser);
            setUser(currenUser)
        })
        return ()=>{
            unSubcribe();
        }
    }, [])




    const travelInfo = {
        user,
        createUser,
        signInUser,
        logOut
    };


    return (
        <div>
            <TravelAuthContext.Provider value={travelInfo}>
                {children}
            </TravelAuthContext.Provider>
        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes  = {
    children: PropTypes.node,
}