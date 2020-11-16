import React from "react";
import StoreContext from "../../../storeContext";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "./../../../redux/profile-reducer";
import MyPostsContainer from "./MyPosts";

const MyPosts = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = function () {
                    store.dispatch(addPostActionCreator());
                };

                const updateNewPostText = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };
                return (
                    <MyPostsContainer
                        profilePage={store.getState().profilePage}
                        updateNewPostText={updateNewPostText}
                        addPost={addPost}
                        posts={store.getState().profilePage.posts}
                        newPostText={store.getState().profilePage.newPostText}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPosts;
