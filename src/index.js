import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GitHubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev - g390yz2u.eu.auth0.com;
//LPXz6sEr68j6AkgHPndgZZlN5jls7B5z

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-g390yz2u.eu.auth0.com"
      clientId="LPXz6sEr68j6AkgHPndgZZlN5jls7B5z"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GitHubProvider>
        <App />
      </GitHubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
