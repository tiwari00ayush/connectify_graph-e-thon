import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase.config.js";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getCurrentUser = async (user) => {
      if (user === undefined || user === null) {
        setCurrentUser(null);
      } else {
        try {
          const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
            setCurrentUser({ uid: user.uid, ...doc.data() });
          });
        } catch (error) {
          console.log(error);
        }
      }
    };
    const unSub = onAuthStateChanged(auth, (user) => {
      getCurrentUser(user);
    });
    return () => {
      unSub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
