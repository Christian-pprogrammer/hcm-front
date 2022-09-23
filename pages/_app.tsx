import type { AppProps } from 'next/app';
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; //styles of nprogress
import { Provider, useDispatch } from "react-redux";
import { compose, legacy_createStore as createStore } from "redux";
import { useEffect } from "react";
import Head from "next/head";
import jwt from "jwt-decode";

import UserService from "../services/users/user.service";
import { updateJavaScriptObject } from "../utils/functions";
import reducer from "../store/reducers";
import AuthService from "../services/auth/auth.service";
import { setAuthUser } from "../store/actions";
import Snack from "../components/reusable/snackbar";
import { details } from "../utils/site-traffic";
import SiteTrafficService from "../services/site-traffic";
import {
  app_config,
  DEVICE_DETAILS_LOCAL_STORAGE_KEY,
} from "../utils/constants";

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (typeof window !== "undefined") {
  store = createStore(
    reducer /* preloadedState, */,
    composeEnhancers()
  );
}
