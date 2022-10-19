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
import { AbstractIntlMessages, IntlError, IntlErrorCode, NextIntlProvider } from 'next-intl';

NProgress.configure({ showSpinner: false });
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

let store = createStore(reducer);

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
type ProviderProps = {
  messages?: AbstractIntlMessages;
};


function onError(error: IntlError) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    // Missing translations are expected and should only log an error
    console.error(error);
  }
}

function getMessageFallback({
  namespace,
  key,
  error,
}: {
  namespace?: string | undefined;
  key: string;
  error: IntlError;
}) {
  const path = [namespace, key].filter(part => part != null).join('.');

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} is not yet translated`;
  }

  return `Dear developer, please fix this message: ${path}`;
}


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
          .catch((e:any) => reportError("No Auth User"));
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
          } catch (e:any){
            (e: any) => console.log(e);
          }
        } 
      } catch(e:any) {
        (e: any) => console.log(e);
      }
    })();
  }, []);
  return (
    <Provider store={store}>
      <NextIntlProvider       // To achieve consistent date, time and number formatting
      // across the app, you can define a set of global formats.
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          },
        },
      }}
      messages={pageProps.messages}
      // Providing an explicit value for `now` ensures consistent formatting of
      // relative values regardless of the server or client environment.
      now={new Date(pageProps.now)}
      // Also an explicit time zone is helpful to ensure dates render the
      // same way on the client as on the server, which might be located
      // in a different time zone.
      timeZone="Austria/Vienna"   getMessageFallback={getMessageFallback} onError={onError}>
          <ToastContainer style={{ fontSize: "0.8em" }} />
          <AppMeta />
          <Component {...pageProps} />
      </NextIntlProvider>
    </Provider>
  );
}

export default MyApp;
