import { useEffect, useState } from "react";
import AuthService from "../services/auth/auth.service";
import jwtDecode from "jwt-decode";
import NotFound from "../pages/404";
import Router from "next/router";
import { PREV_LINK_LOCAL_STORAGE_KEY } from "../utils/constants";
import { encryptText } from "../utils/encryption-decryption";

export default function RouteProtector({ children, only }: any) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      (async () => {
        if (AuthService.isLoggedIn() && !AuthService.tokenExpired()) {
            setLoading(false)
        } else {
            localStorage.setItem(PREV_LINK_LOCAL_STORAGE_KEY, encryptText(Router.asPath))
            await Router.push("/auth/login")
        }
      }) ()
    }, [])

    if (loading) return <div/>
    if (!only.includes(jwtDecode<any>(AuthService.getDecToken() as string).user.role.role)) return <NotFound />

    return children
}