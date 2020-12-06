const UPDATE_NEW_DIALOGS_MESSAGE_TEXT = "UPDATE-NEW-DIALOGS-MESSAGE-TEXT";
const ADD_DIALOG_MESSAGE = "ADD-DIALOG-MESSAGE";

const initialState = {
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
    newDialogMessageText: "",
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE: {
            if (state.newDialogMessageText !== "") {
                const newMessage = {
                    id: state.messages.length + 1,
                    name: "Vova",
                    message: action.messageText,
                };

                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    newDialogMessageText: "",
                };
            }
            return state;
        }

        case UPDATE_NEW_DIALOGS_MESSAGE_TEXT: {
            return {
                ...state,
                newDialogMessageText: action.newText,
            };
        }
        default:
            return state;
    }
};

export const updateNewDialogsMessageText = (text) => ({
    type: UPDATE_NEW_DIALOGS_MESSAGE_TEXT,
    newText: text,
});
export const addDialogMessage = (text) => ({
    type: ADD_DIALOG_MESSAGE,
    messageText: text,
});

export default dialogsReducer;
