import type { AppProps } from 'next/app';
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; //styles of nprogress
import { Provider, useDispatch } from "react-redux";
import { compose, legacy_createStore as createStore } from "redux";
import { useEffect } from "react";
import Head from "next/head";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../styles/globals.css";
import { withLocaleMessages } from '../utils/ssg/withLocaleMessages';

import UserService from "../services/users/user.service";
import { updateJavaScriptObject } from "../utils/functions";
import reducer from "../store/reducers";
import AuthService from "../services/auth/auth.service";
import { setAuthUser } from "../store/actions";
import { details } from "../utils/site-traffic";
import SiteTrafficService from "../services/site-traffic";
import {
  app_config,
  DEVICE_DETAILS_LOCAL_STORAGE_KEY,
} from "../utils/constants";
import { AbstractIntlMessages, NextIntlProvider } from 'next-intl';

NProgress.configure({ showSpinner: false });
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

let store = createStore(reducer);
type MessageProps ={
  messages?: AbstractIntlMessages;
}
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// if (typeof window !== "undefined") {
store = createStore(
  reducer,
  // composeEnhancers()
);
// }

function AppMeta() {

  useEffect(() => {
    setUser();
  });
  const dispatch = useDispatch();

  const setUser = () => {
    if (AuthService.isLoggedIn()) {
      if (!AuthService.tokenExpired()) {
        const token: any = AuthService.getDecToken();
        UserService.get(jwtDecode<any>(token).user.id)
          .then((res) => {
            const curr_user = updateJavaScriptObject(jwtDecode(token), res.data);
            curr_user.fullNames = res.data.username;
            const user_role = (res.data.roles[0].role);
            // curr_user.role = res.data.roles[0].role;
            console.log(user_role);

            if (user_role == "SUPER_ADMIN") {
              curr_user.role = "Super Admin";
            } else if (user_role == "GROUP_ADMIN") {
              curr_user.role = "Group Admin";
            } else if (user_role == "GROUP_DIRECTOR") {
              curr_user.role = "Group Director";
            } else if (user_role == "HOSPITAL_ADMIN") {
              curr_user.role = "Hospital Admin";
            } else if (user_role == "HOSPITAL_DIRECTOR") {
              curr_user.role = "Hospital Director";
            } else if (user_role == "DOCTOR") {
              curr_user.role = "Doctor";
            } else if (user_role == "PATIENT") {
              curr_user.role = "Patient";
            } else if (user_role == "APPOINTMENT_MANAGER") {
              curr_user.role = "Appointment Manager";
            } else if (user_role == "SCHEDULE_MANAGER") {
              curr_user.role = "Schedule Manager";
            } else {
              curr_user.role = "Guest";
            }

            dispatch(setAuthUser(curr_user));
          })
          .catch((e) => console.log(e));
      }
    }
  };

  return (
    <div>
      <Head>
        <title>{app_config.APP_DISCRIPTO}</title>
        <meta
          name={"description"}
          content={
            "You no longer have to worry about missing treatment from hospitals. You have to go knowing even when you'll be treated"
          }
        />
        <meta property={"og:title"} content={"Medical Appointment System"} />
        <link rel="icon" href={app_config.APP_LOGO} />
        <meta
          name="keywords"
          content="hcm, medical, appointment system, hospital appointment system, appointment treatment"
        />
        <meta name="application-name" content={app_config.APP_NAME} />
        <meta name="author" content="HCM Corporations" />
        <meta property="og:description" content={app_config.APP_DISCRIPTO} />
      </Head>
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (async function () {
      try {
        let detail = await details();
        if (!sessionStorage.getItem(DEVICE_DETAILS_LOCAL_STORAGE_KEY)) {
          sessionStorage.setItem(
            DEVICE_DETAILS_LOCAL_STORAGE_KEY,
            JSON.stringify(detail)
          );
          try {
            await SiteTrafficService.create(detail);
          } catch {
            (e: any) => console.log(e);
          }
        }
      } catch {
        (e: any) => console.log(e);
      }
    })();
  }, []);
  return (
    <Provider store={store}>
      <NextIntlProvider messages={pageProps.messages}>
          <ToastContainer style={{ fontSize: "0.2em" }} />
          <AppMeta />
          <Component {...pageProps} />
      </NextIntlProvider>
    </Provider>
  );
}

export default MyApp;
