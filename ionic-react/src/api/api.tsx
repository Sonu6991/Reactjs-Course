// import * as axios from 'axios';

const user = {
      "email": "sonu@hops.healthcare",
      "password": "12345678"
}


const axios = require("axios").default;

const api = axios.create({
      baseURL: `http://192.168.2.114:8080/api/v1`,
});

/**
 * 
 * @param url :url path concating with baseUrl
 * @param method request type (method)
 * @param headers reaquest header
 * @param body request body
 * @param data request data
 * @returns response data
 */

export const callApi = async (url: string, method: string, headers: any, data: any) => {
      try {
            const response = await api({
                  url: url,
                  method: method,
                  headers: headers,
                  data: data
            })
            return response.data
      } catch (error) {
            console.log(error);
      }

}


export const authentication = async () => {
      try {
            const response = await api.post("/users/login", user)
            console.log(response.data)
            return response.data
      } catch (error) {
            console.log(error);
      }
}
