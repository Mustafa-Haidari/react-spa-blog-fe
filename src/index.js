import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AutheContextProvider } from "./user-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AutheContextProvider>
      <App />
    </AutheContextProvider>
  </React.StrictMode>
);
