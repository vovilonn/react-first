import React, { Component } from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <section className={s["content-user"]}>
            <img
                src="./../images/1.jpeg"
                alt=""
                className={s["content-user-avatar"]}
            />
            <div className={s["content-user-info"]}>
                <h2 className={s["content-user-name"]}>Dmitry K.</h2>
                <span className={s["content-user-description"]}>
                    Date of birth: 2 january
                </span>
                <span className={s["content-user-description"]}>
                    City: minsk
                </span>
                <span className={s["content-user-description"]}>
                    Education: BSU'11
                </span>
                <span className={s["content-user-description"]}>
                    Web site: https://it-kamasutra.com
                </span>
            </div>
        </section>
    );
};

export default ProfileInfo;
