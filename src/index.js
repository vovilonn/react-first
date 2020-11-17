import reduxStore from "./redux/redux-store.js";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
const rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider value={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree(reduxStore);

reduxStore.subscribe(() => {
    rerenderEntireTree(reduxStore);
});

serviceWorker.unregister();
