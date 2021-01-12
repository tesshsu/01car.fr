import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import cookies from "next-cookies";
import PageChange from "components/PageChange/PageChange.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import * as reducers from "../service/reducers";
import userReducer from "../service/reducers/user";
import carsReducer from "../service/reducers/cars";
import { setupApiClient } from "../api/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import CookieConsent from "react-cookie-consent";
import * as LOGGED_USER_ACTIONS from "../service/actions/loggedUser";
import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import { parseCookies, setCookie } from "nookies";
//combien all the reducers
const logger = createLogger();
const rootReducers = combineReducers({
  user: userReducer,
  carsReducer: carsReducer,
  ...reducers,
});
const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

setupApiClient();

const stripePromise = loadStripe("pk_test_51HgmzIBjqnSC21bhUov33uWhuXhCFQBnwRcy1pfJgKmXv42GkV7vLZJ0uNR26SdEUomqGHDnGhCXvxn0MY6GjIg100F67arXkO");

export const getServerSideProps = async ctx => {
  const stripe = new Stripe("sk_test_51HgmzIBjqnSC21bhuUPX8DMnH1ynu6iKdvoVMhjUqKgdVqDGKmrBximAok0WD9ypSgk6b3uq1ZE1uqsEEoM4PKzP00iDeWHIKx");

  let paymentIntent;

  const { paymentIntentId } = await parseCookies(ctx);
  console.log('paymentIntentId1: ', paymentIntent);
  if (paymentIntentId) {
    paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    console.log('paymentIntentId: ', paymentIntent);
    return {
      props: {
        paymentIntent
      }
    };
  }

  paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "eur",
    receipt_email:"info@01car.fr"
  });

  setCookie(ctx, "paymentIntentId", paymentIntent.id);

  return {
    props: {
      paymentIntent
    }
  };
};

function getCookie(cname) {
  if (typeof window === "undefined") return null;
  var name = cname + "=";

  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const authUser = cookies(ctx).user || "";

    if (authUser) {
      store.dispatch({
        type: LOGGED_USER_ACTIONS.LOGIN,
        payload: {
          user: authUser.loggedUser,
        },
      });
    }

    return { pageProps };
  }

  componentWillMount() {
    const isAuthenticated = getCookie("user");
    if (isAuthenticated) {
      const loggedUser = JSON.parse(isAuthenticated).loggedUser;
      store.dispatch({
        type: LOGGED_USER_ACTIONS.LOGIN,
        payload: {
          user: loggedUser,
        },
      });
    }
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>01car.fr</title>
        </Head>
        <Provider store={store}>
          <Layout>
            <CookiesProvider>
              <Component {...pageProps} />
            </CookiesProvider>
            <CookieConsent
              location="bottom"
              buttonText="Ok pour moi!!"
              cookieName="01carCookies"
              style={{ background: "#2B373B" }}
              buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
              expires={30}
            >
              En poursuivant votre navigation sur ce site, vous acceptez qu'on
              vous accompagne pour analyser le fonctionnement et l’efficacité du
              site, vous proposer des interactions par le biais des réseaux
              sociaux.{" "}
              <span style={{ fontSize: "10px" }}>C'est OK pour vous ?</span>
              <span style={{ fontSize: "10px" }}>
                <Link href="/footer/policy">
                  <a
                    href="#"
                    className={
                      "text-sm font-normal block w-full whitespace-no-wrap bg-transparent text-orange-500"
                    }
                  >
                    Lire la politique de confidentialité
                  </a>
                </Link>
              </span>
            </CookieConsent>
          </Layout>
        </Provider>
      </React.Fragment>
    );
  }
}
