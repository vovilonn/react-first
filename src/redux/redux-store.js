// eslint-disable-next-line no-unused-vars
import logger from "redux-logger";
// eslint-disable-next-line no-unused-vars
import thunk from "redux-thunk";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

// eslint-disable-next-line no-unused-vars
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = createStore(
    reducers,
    // applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
