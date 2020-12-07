import React from "react";
import s from "./users.module.css";
const Users = ({ users, follow, unfollow, setUsers }) => {
    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                fullName: "Vova",
                status: "I'm a boss",
                location: { city: "Odessa", country: "Ukraine" },
                followed: false,
                photoURL:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaR4M-FaWaJBUxmzjz5PwTFPUEpzAP9qnIGg&usqp=CAU",
            },
            {
                id: 2,
                fullName: "Vova",
                status: "I'm a boss",
                location: { city: "Odessa", country: "Ukraine" },
                followed: false,
                photoURL:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaR4M-FaWaJBUxmzjz5PwTFPUEpzAP9qnIGg&usqp=CAU",
            },
            {
                id: 3,
                fullName: "Vova",
                status: "I'm a boss",
                location: { city: "Odessa", country: "Ukraine" },
                followed: true,
                photoURL:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaR4M-FaWaJBUxmzjz5PwTFPUEpzAP9qnIGg&usqp=CAU",
            },
            {
                id: 4,
                fullName: "Vova",
                status: "I'm a boss",
                location: { city: "Odessa", country: "Ukraine" },
                followed: false,
                photoURL:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaR4M-FaWaJBUxmzjz5PwTFPUEpzAP9qnIGg&usqp=CAU",
            },
        ]);
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
