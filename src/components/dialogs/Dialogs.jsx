import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
export const DialogItem = (props) => {
    return (
        <li className={s.dialogs_list_item}>
            <NavLink
                to={`/dialogs/${props.id}`}
                className={s.dialogs_list_link}
            >
                {props.name}
            </NavLink>
        </li>
    );
};

export const Message = (props) => {
    return (
        <div className={s.dialogs_message}>
            <div className={s.dialogs_avatar_block}>
                <img
                    src="http://placehold.it/50"
                    alt=""
                    className={s.dialogs_avatar}
                />
            </div>
            <span className={s.dialogs_name}>{props.name}</span>
            <p className={s.dialogs_message_text}>{props.message}</p>
        </div>
    );
};
const Dialogs = ({
    dialogs,
    messages,
    sendMessageDispatch,
    updateNewMessageBody,
    newDilogMessageText,
}) => {
    let dialogsElements = dialogs.map((elem) => (
        <DialogItem name={elem.name} key={elem.id} />
    ));
    let messagesElements = messages.map((elem) => (
        <Message name={elem.name} message={elem.message} key={elem.message} />
    ));
    const newDialogMessege = React.createRef();

    const sendMessage = () => {
        const messageText = newDialogMessege.current.value.trim();
        sendMessageDispatch(messageText);
    };

    const onMessageChange = (e) => {
        updateNewMessageBody(e.target.value);
    };

    return (
        <React.Fragment>
            <section className={`content ${s.dialogs_wrapper}`}>
                <h1 className={s.dialogs_title}>Dialogs</h1>
                <ul className={s.dialogs_list}>{dialogsElements}</ul>
                <div className={s.dialogs_dialog}>{messagesElements}</div>
                <div className={s.dialogs_sendForm}>
                    <textarea
                        ref={newDialogMessege}
                        className={s.dialogs_sendText}
                        cols="30"
                        rows="10"
                        placeholder="Введите сообщение..."
                        value={newDilogMessageText}
                        onChange={onMessageChange}
                    ></textarea>
                    <button onClick={sendMessage} className={s.dialogs_sendBtn}>
                        Send
                    </button>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Dialogs;
