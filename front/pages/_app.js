import React from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { Provider } from 'react-redux';
import PageChange from "components/PageChange/PageChange.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import * as reducers from '../service/reducers';
import userReducer from '../service/reducers/user';
import carsReducer from '../service/reducers/cars';
import { setupApiClient } from '../api/client';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import CookieConsent from "react-cookie-consent";
//combien all the reducers
const logger = createLogger();
const rootReducers = combineReducers({
  user: userReducer,
  carsReducer: carsReducer,
  ...reducers
})
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

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
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
        <Provider store={store} >
		<Layout>
          <Component {...pageProps} />
		  <CookieConsent
			  location="bottom"
			  buttonText="Ok pour moi!!"
			  cookieName="01carCookies"
			  style={{ background: "#2B373B" }}
			  buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
			  expires={30}
			>
			  En poursuivant votre navigation sur ce site, vous acceptez qu'on vous accompagne pour analyser le fonctionnement et l’efficacité du site, vous proposer des interactions par le biais des réseaux sociaux.{" "}
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
