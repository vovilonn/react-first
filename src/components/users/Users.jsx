import React from "react";
import s from "./users.module.css";
import * as axios from "axios";
const Users = ({ users, follow, unfollow, setUsers }) => {
    if (users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((res) => {
                console.log(res.data.items);
                setUsers(res.data.items);
            });
    }

    return (
        <div>
            {users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img src="" alt="avatar" className={s.userPhoto} />
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
