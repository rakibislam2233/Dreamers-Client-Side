import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const UserContext = createContext(null);

import app from "../Firebase/Firebase.confi";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const Googleprovider = new GoogleAuthProvider();
  const createNewUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth)
      .then(() => {})
      .catch(() => {});
  };
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, Googleprovider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInformation = {
    user,
    createNewUser,
    login,
    logOut,
    loading,
    googleLogin,
  };
  return (
    <UserContext.Provider value={authInformation}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
