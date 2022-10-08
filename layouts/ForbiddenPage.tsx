import {useSelector} from "react-redux";
import React, {ReactNode, useEffect} from "react";
import Router from "next/router";
import {getUserHref} from "../utils/validations/redirects";


// interface Props {
//     children?: React.ReactElement | React.ReactNode
// }

export const ForbiddenPage = ({children}: {children: JSX.Element}) => {
    const authUser = useSelector((state: any) => state.authUser)
    useEffect(() => {
        if (authUser.role) {
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