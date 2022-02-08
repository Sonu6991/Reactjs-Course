// import * as axios from 'axios';
import React, { createContext, useState } from "react";


const axios = require("axios").default;

let api = axios.create({
      baseURL: `http://192.168.2.114:8080/api/v1`,
      headers: {
            'Content-Type': 'application/json',
      },
});


api.interceptors.request.use(function (config: any) {
      const token = localStorage.getItem('token');
      // console.log("authtoken", config);
      config.headers.authorization = token ? `Bearer ${token}` : '';
      return config;
});


/**
 * 
 * @param url :url path concating with baseUrl
 * @param method request type (method)
 * @param headers reaquest header
 * @param body request body
 * @param body request body
 * @returns response data
 */




export const ApiContext = createContext({});

const ApiProvider: React.FC = (props) => {
      const [isLoading, setIsLoading] = useState(false);
      const [feedBack, setFeedBack] = useState({});

      const callApi = async (url: string, method: string, headers: any, body: any) => {
            try {
                  setIsLoading(true);
                  const response = await api({
                        url: url,
                        method: method,
                        headers: headers,
                        data: body
                  })
                  setIsLoading(false);
                  setFeedBack({ message: "success..!", severity: "success" });
                  return response.data

            } catch (error: any) {
                  if (error?.response.status === 401) {
                        console.log("401 unauthorized")
                  }
                  setIsLoading(false);
                  setFeedBack({ message: "Invalid Credential", severity: "error" });
                  console.log(error)
            }

      }
      const value = { isLoading, setIsLoading, feedBack, setFeedBack, callApi };
      return (
            <ApiContext.Provider value={value as any}>
                  {props.children}
            </ApiContext.Provider>
      );
};

export default ApiProvider;


