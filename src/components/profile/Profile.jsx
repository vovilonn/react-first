import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = ({ store }) => {
    return (
        <main className="content">
            <div className={s["content-header"]}></div>
            <ProfileInfo />
            <MyPosts />
        </main>
    );
};

export default Profile;
