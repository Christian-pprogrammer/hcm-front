import axios from "axios";
import Router from "next/router";
import AuthService from './auth/auth.service';

export const domain = process.env.NEXT_PUBLIC_API_URL;


const http = axios.create({
  baseURL: `${domain}/api/v2`,
  headers: { 'Content-Type': 'application/json' },
});

http.interceptors.request.use(
  function (config: any) {
    const token = AuthService.getDecToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    return Promise.resolve(response)
  },
  function (error) {
    let res = error.response;
    if (res?.data && res.data.message === "INVALID BEARER TOKEN")
      Router.push("/auth/login").then()

    return Promise.reject(error);
  }
)

export default http;
