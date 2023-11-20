import React from "react";
import ReactDOM from "react-dom/client";
import { ProyectApp } from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ProyectApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
