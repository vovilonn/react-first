import React from "react";
import s from "./users.module.css";
const Users = ({ users, follow, unfollow, setUsers }) => {
    return (
        <div>
            {users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photoURL}
                                alt=""
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
                                    Unfollow
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
                            {/* <div>{u.location.city}</div>
                            <div>{u.location.country}</div> */}
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
