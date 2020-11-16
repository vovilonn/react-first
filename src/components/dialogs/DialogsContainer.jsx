import React from "react";
import {
    addDialogMessage,
    updateNewDialogsMessageText,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";
const DialogsContainer = () => {
    return (
        <StoreContext>
            {(store) => {
                const sendMessageDispatch = (messageText) => {
                    store.dispatch(addDialogMessage(messageText));
                    store.dispatch(updateNewDialogsMessageText(""));
                };
                const updateNewMessageBody = (text) => {
                    store.dispatch(updateNewDialogsMessageText(text));
                };

                return (
                    <Dialogs
                        sendMessageDispatch={sendMessageDispatch}
                        updateNewMessageBody={updateNewMessageBody}
                        dialogs={store.getState().dialogsPage.dialogs}
                        messages={store.getState().dialogsPage.messages}
                        newDilogMessageText={
                            store.getState().dialogsPage.newDilogMessageText
                        }
                    />
                );
            }}
        </StoreContext>
    );
};

export default DialogsContainer;
