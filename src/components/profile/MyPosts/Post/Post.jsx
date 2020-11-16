import React from "react";
import s from "./Post.module.css";

const Post = ({ message }) => {
    return (
        <div className={s["content-comments-item"]}>
            <div className={s["content-comments-avatar"]}></div>
            <p className={s["content-comments-text"]}>{message}</p>
        </div>
    );
};

export default Post;
