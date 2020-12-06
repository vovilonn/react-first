import {
    addDialogMessage,
    updateNewDialogsMessageText,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newDilogMessageText: state.dialogsPage.newDialogMessageText,
    };
};

const mapDispatchToProps = (dispatch) => ({
    sendMessageDispatch: (messageText) => {
        dispatch(addDialogMessage(messageText));
        dispatch(updateNewDialogsMessageText(""));
    },
    updateNewMessageBody: (text) => {
        dispatch(updateNewDialogsMessageText(text));
    },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
