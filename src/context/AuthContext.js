import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };

    const login = (email, password) => {
        console.log(currentUser)
        return auth.signInWithEmailAndPassword(email, password);
    };

    const logout = () => {
        return auth.signOut();
    };

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    };

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{
            signup,
            login,
            logout,
            resetPassword,
            updateEmail,
            updatePassword,
            currentUser
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default useAuth;
