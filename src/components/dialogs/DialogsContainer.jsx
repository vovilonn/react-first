import React from "react";
import { connect } from "react-redux";
import {
    addDialogMessage,
    updateNewDialogsMessageText,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessageDispatch: (messageText) => {
            dispatch(addDialogMessage(messageText));
            dispatch(updateNewDialogsMessageText(""));
        },
        updateNewMessageBody: (text) => {
            dispatch(updateNewDialogsMessageText(text));
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
