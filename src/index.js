import reduxStore from "./redux/redux-store.js";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();
