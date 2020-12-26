import React from "react";
import s from "./users.module.css";
import * as axios from "axios";
const Users = ({ users, follow, unfollow, setUsers }) => {
    if (users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((res) => {
                setUsers(res.data);
            });
    }

    return (
        <div>
            {users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photoURL}
                                alt="avatar"
                                className={s.userPhoto}
                            />
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onClick={() => {
                                        unfollow(u.id);
                                    }}
                                >
                                    Unollow
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        follow(u.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
