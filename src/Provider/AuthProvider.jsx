import { useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/Firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  // loading
  const [loading, setLoading] = useState(true);
  // user
  const [user, setUser] = useState(null);
  // crateUser
  const createUser = (email, password)=> {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signinUser
  const signInUser = (email, password)=> {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser
  }
  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

