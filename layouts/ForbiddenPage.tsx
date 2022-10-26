import {useSelector} from "react-redux";
import React, {ReactNode, useEffect} from "react";
import Router from "next/router";
import {getUserHref} from "../utils/validations/redirects";


interface Props {
    children?: React.ReactElement | React.ReactNode
}

export const ForbiddenPage = ({children}: Props) => {
    const authUser = useSelector((state: any) => state.authUser)
    useEffect(() => {
        if (authUser?.user?.role?.role) {
            Router.push(getUserHref(authUser)).then()
        }
    }, [authUser])

    return (
        <>
            {children}
        </>
    )
}

export  default  ForbiddenPage;