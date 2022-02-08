import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { ApiContext } from "../api/api";

export const AuthContext = createContext<undefined>(undefined);

export const AuthProvider = (props: any) => {
      const apiCotext: any = useContext(ApiContext)
      const { callApi } = apiCotext;
      const token = localStorage.getItem('token');
      const [user, setUser] = useState(null);
      const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem('isAuthenticated') as any));
      const history = useHistory()

      const loginHandler = async (user: any) => {
            const response = await callApi('/users/login', 'POST', { "Content-Type": "application/json" }, user);

            const data = await response.data.user
            response.token && localStorage.setItem('token', response.token)
            if (data) {
                  setUser(data);
                  localStorage.setItem('isAuthenticated', "true")
                  setIsAuthenticated(true);
                  history.replace('/home');
            }
      }
      const logOutHandler = async () => {
            const data = await callApi('/users/logout', 'GET', { 'authorization': 'Bearer ' + token }, null);
            if (data?.status === "success") {
                  setIsAuthenticated(false)
                  history.replace('/login')
                  localStorage.setItem('isAuthenticated', "false")
                  setUser(null);
            }
      }

      const value: any = {
            isAuthenticated,
            user,
            loginHandler,
            logOutHandler,
            token
      }

      return <AuthContext.Provider value={value}> {props.children}</AuthContext.Provider>;
};

export default AuthProvider;
