import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";

import "./index.css";
import theme from "./common/theme";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const ContextProvider = ({ children }) => (
  <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
);

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
registerServiceWorker();
