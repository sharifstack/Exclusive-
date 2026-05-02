import { createContext, useEffect, useMemo, useState } from "react";
import {
  listenToAuthChanges,
  loginWithEmail,
  logoutUser,
  resetPassword,
  signupWithEmail,
  loginWithGoogle,
} from "./authService";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = listenToAuthChanges((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = useMemo(() => {
    return {
      user,
      loading,
      signup: signupWithEmail,
      login: loginWithEmail,
      googleLogin: loginWithGoogle,
      logout: logoutUser,
      forgotPassword: resetPassword,
    };
  }, [
    user,
    loading,
    signupWithEmail,
    loginWithEmail,
    loginWithGoogle,
    logoutUser,
    resetPassword,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
