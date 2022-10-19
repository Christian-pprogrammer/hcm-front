import axios from "axios";
import Router from "next/router";
import AuthService from './auth/auth.service';

export const domain = "https://hcm-backend-hosting.herokuapp.com";


const http = axios.create({
    baseURL: `${domain}/api/v2`,
    headers: { 'Content-Type': 'application/json' },
});

http.interceptors.request.use(
    function (config: any) {
        const token = AuthService.getEncToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        reportError(error);
        console.log(error)
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    function (response) {
        console.log(response);
        return Promise.resolve(response)
    },
    function (error) {
        let res = error.response;
        reportError(res);
        console.log(res)
        if (res?.data && res.data.message === "INVALID BEARER TOKEN")
            Router.push("/auth/login").then()

        return Promise.reject(error);
    }
)

export default http;
