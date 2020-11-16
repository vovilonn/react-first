import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi! How are you?" },
                { id: 2, message: "It's my first post" },
            ],
            newPostText: "VAXPILZDU",
        },
        dialogsPage: {
            messages: [],
            dialogs: [
                { id: 1, name: "Vova" },
                { id: 2, name: "Antony" },
                { id: 3, name: "Andry" },
                { id: 4, name: "Olga" },
                { id: 5, name: "Max" },
                { id: 6, name: "John" },
                { id: 7, name: "Alex" },
                { id: 8, name: "Alika" },
                { id: 9, name: "Viktor" },
                { id: 10, name: "Valeriy" },
            ],
            newDilogMessageText: "",
        },
        sidebar: {
            friends: [
                { name: "Vova", id: 1 },
                { name: "Mary", id: 1 },
                { name: "Antony", id: 1 },
            ],
        },
    },
    _callSubscriber() {
        console.log("state changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        );
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};



export default store;
window.state = store._state;
