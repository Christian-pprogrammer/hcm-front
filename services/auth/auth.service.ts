import jwt from 'jwt-decode';

import http from "../http-common";
import { encryptText, decryptText, decryptTextV2 } from "../../utils/encryption-decryption";
import { LOCAL_STORAGE_TOKEN_KEY } from "../../utils/constants";

class AuthService {

    login(data: any) {
        return http.post('/auth/login', data);
    }

    initiateResetPassword(data: any) {
        return http.post('/auth/initiate-reset-password', data);
    }

    resetPassword(data: any) {
        return http.post('/auth/reset-password', data);
    }

    resendToken(data: any) {
        return http.post('/auth/reset-password/resend-email', data);
    }


    getEncToken() {
        if (typeof window !== "undefined")
            return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
        return;
    }

    getDecToken() {
        if (typeof window !== "undefined")
            return decryptText(localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY), LOCAL_STORAGE_TOKEN_KEY);
        return;
    }

    setToken(token: string) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, encryptText(token));
    }

    isLoggedIn() {
        const token = this.getDecToken();
        if (!!token) {
            try {
                return jwt(token);
            } catch (error) {
                return false;
            }
        } else {
            return false;
        }
    }

    getExp() {
        const token: any = this.isLoggedIn();
        if (!token) return null;

        const date = new Date(0);
        date.setUTCSeconds(token.exp);

        return date;
    }

    tokenExpired() {
        const exp = this.getExp();
        if (!exp) return null;
        const expired = !(exp.valueOf() > new Date().valueOf());
        if (expired) this.logout();
        return expired;
    }

    logout() {
        this.removeToken();
    }
    removeToken() {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
    }
}

export default new AuthService();