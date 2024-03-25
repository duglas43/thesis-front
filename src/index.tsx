import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/index.css";
import "@shared/i18n";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { store } from "./app/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./app/styles";
import { AbilityContext, ability } from "./entities/casl";

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
              <AbilityContext.Provider value={ability}>
                <App />
              </AbilityContext.Provider>
            </Suspense>
          </BrowserRouter>
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
