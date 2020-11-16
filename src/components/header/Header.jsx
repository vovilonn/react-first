import React from "react";
import s from "./Header.module.css";
const Header = () => {
    return (
        <header className={s["header"]}>
            <img
                src="./../images/logo.png"
                alt=""
                className={s["header-logo"]}
            />
        </header>
    );
};

export default Header;
