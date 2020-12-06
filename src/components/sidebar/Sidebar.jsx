import React from "react";
import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
const Friend = ({ friend }) => {
    return (
        <div className={s.friend}>
            <img
                src="http://placehold.it/50"
                alt="avatar"
                className={s.friend_avatar}
            />
            <span className={s.friend_name}>{friend.name}</span>
        </div>
    );
};

const Sidebar = ({ friends }) => {
    const friendsList = friends.map((friend) => {
        return <Friend friend={friend} key={friend.name} />;
    });

    return (
        <aside className={s.aside}>
            <nav className={s["aside-menu"]}>
                <div className={s["aside-menu-item"]}>
                    <NavLink
                        to="/profile"
                        className={s["aside-menu-link"]}
                        activeClassName={s.activeLink}
                    >
                        Profile
                    </NavLink>
                </div>
                <div className={s["aside-menu-item"]}>
                    <NavLink
                        to="/dialogs"
                        className={s["aside-menu-link"]}
                        activeClassName={s.activeLink}
                    >
                        Messages
                    </NavLink>
                </div>
                <div className={s["aside-menu-item"]}>
                    <NavLink
                        to="/users"
                        className={s["aside-menu-link"]}
                        activeClassName={s.activeLink}
                    >
                        Users
                    </NavLink>
                </div>
                <div className={s["aside-menu-item"]}>
                    <NavLink
                        to="/news"
                        className={s["aside-menu-link"]}
                        activeClassName={s.activeLink}
                    >
                        News
                    </NavLink>
                </div>
                <div className={s["aside-menu-item"]}>
                    <NavLink
                        to="/music"
                        className={s["aside-menu-link"]}
                        activeClassName={s.activeLink}
                    >
                        Music
                    </NavLink>
                </div>
                <div className={s["aside-menu-item"]}>
                    <NavLink
                        to="/settings"
                        className={s["aside-menu-link"]}
                        activeClassName={s.activeLink}
                    >
                        Settings
                    </NavLink>
                </div>
            </nav>
            <div className={s.friends}>{friendsList}</div>
        </aside>
    );
};

export default Sidebar;
