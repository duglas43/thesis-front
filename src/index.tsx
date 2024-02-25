import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./i18n";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { store } from "./store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Suspense fallback="">
              <App />
            </Suspense>
          </BrowserRouter>
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
