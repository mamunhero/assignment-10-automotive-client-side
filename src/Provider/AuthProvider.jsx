import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/Firebase-config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
  // setLoading
  const [loading, setLoading] = useState(true);
  // user
  const [user, setUser] = useState(null);
  // crateUser
  const createUser = (email, password)=> {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signinUser
  const signInUser = (email, password)=> {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  // singingoogle
  const singInGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }
  // signout
  const logout = () => {
    setLoading(true);
    return signOut(auth)
  }


  // authstatechange
  useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser=> {
      setUser(currentUser);
      setLoading(false)
    })
    return ()=> {
      unSubscribe();
    }
  },[])
  const authInfo = {
    user,
    createUser,
    signInUser,
    logout,
    loading,
    singInGoogle
  }
  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

