import reduxStore from "./redux/redux-store.js";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./storeContext";
const rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree(reduxStore);

reduxStore.subscribe(() => {
    rerenderEntireTree(reduxStore);
});

serviceWorker.unregister();
