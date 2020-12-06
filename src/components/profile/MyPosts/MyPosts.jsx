import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({
    profilePage,
    updateNewPostText,
    addPost,
    newPostText,
    posts,
}) => {
    let postElements = posts.map((data) => (
        <Post message={data.message} key={data.id} />
    ));

    const newPostElement = React.createRef();

    const onAddPost = function () {
        addPost();
        updateNewPostText("");
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        updateNewPostText(text);
    };

    return (
        <React.Fragment>
            <form className={s["content-form"]}>
                <h2 className={s["content-form-title"]}>My posts</h2>
                <textarea
                    ref={newPostElement}
                    cols="30"
                    rows="10"
                    className={s["content-form-text"]}
                    placeholder="your news..."
                    value={newPostText}
                    onChange={onPostChange}
                ></textarea>
                <button
                    type="button"
                    onClick={onAddPost}
                    className={s["content-form-button"]}
                >
                    Add post
                </button>
            </form>

            <section className={s["content-comments"]}>{postElements}</section>
        </React.Fragment>
    );
};

export default MyPosts;
