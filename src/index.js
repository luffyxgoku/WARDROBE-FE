import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";
import { Auth0Provider } from "@auth0/auth0-react";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <Auth0Provider
    domain="dev-symjxkubus2uwvyv.us.auth0.com"
    clientId="jqinBpZOPZqFJOBdYj5B9qFyWylVgXGu"
    authorizationParams={{
      redirect_uri: window.location.origin
    }} >
  
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>
  
);


