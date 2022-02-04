import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { authentication } from "../api/api";

export const AuthContext = createContext<undefined>(undefined);

export const AuthProvider = (props: any) => {
      const token = localStorage.getItem('token');
      const [user, setUser] = useState(null);
      const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem('isAuthenticated') as any));
      const history = useHistory()

      const loginHandler = async () => {
            const response = await authentication();
            const data = await response.data.user
            response.token && localStorage.setItem('token', response.token)
            if (data) {
                  setUser(data);
                  localStorage.setItem('isAuthenticated', "true")
                  setIsAuthenticated(true)
                  history.replace('/home')
            }
      }

      const value: any = {
            isAuthenticated,
            user,
            loginHandler,
            token
      }

      return <AuthContext.Provider value={value}> {props.children}</AuthContext.Provider>;
};

export default AuthProvider;
