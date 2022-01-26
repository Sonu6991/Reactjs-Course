import React, { useState, createContext, useContext, useEffect } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import LoginForm from "../../components/clinic/Login/LoginForm";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("AuthContext Called", isAuthenticated);

  const loginUser = async (email, password) => {
    const { data } = await axios.post(
      // "http://192.168.2.114:8080/api/v1/users/login",
      "http://localhost:8088/api/v1/users/login",
      { email, password }
    );

    if (data.token) {
      setUser(data.data.user);
      setIsAuthenticated(true)
      Router.push("/home")
    }
  };

  const logOutUser = async () => {
    console.log("Router", Router);
    const { data } = await axios.get(
      // "http://192.168.2.114:8080/api/v1/users/logout"
      "http://localhost:8088/api/v1/users/logout"
    );

    // Router.push("/login")
    setIsAuthenticated(false)
    Router.replace("/login");
  };
  useEffect(() => {
    console.log("auth.........", isAuthenticated, user);
    !!user && setIsAuthenticated(true)
  }, [isAuthenticated])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginUser, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthProvider;
// PROTECTED ROUTE -------------------------------------------

export const useAuth = () => useContext(AuthContext);


