import React from "react";
import s from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((res) => {
                this.props.setUsers(res.data.items);
            });
    }

    render() {
        return (
            <div>
                {this.props.users.map((u) => (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img
                                    src={
                                        u.photos.small
                                            ? u.photos.small
                                            : userPhoto
                                    }
                                    alt="avatar"
                                    className={s.userPhoto}
                                />
                            </div>
                            <div>
                                {u.followed ? (
                                    <button
                                        onClick={() => {
                                            this.props.unfollow(u.id);
                                        }}
                                    >
                                        Unollow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            this.props.follow(u.id);
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
    }
}

export default Users;
