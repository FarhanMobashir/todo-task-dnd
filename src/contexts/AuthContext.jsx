import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useSessionStorage } from "../hooks/useSessionStorage";

export const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const [sessionUser, setSessionUser] = useSessionStorage("sessionUser", null);

  const loginSession = (user) => {
    setSessionUser({
      userData: user,
      isLoggedIn: true,
    });
  };

  const login = (user) => {
    setUser({
      userData: user,
      isLoggedIn: true,
    });
  };

  const logout = () => {
    setUser(null);
    setSessionUser(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("sessionUser");
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, user, loginSession, sessionUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
