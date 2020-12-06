const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

const initialState = {
    users: [
        {
            id: 1,
            fullName: "Vova",
            status: "I'm a boss",
            location: { city: "Odessa", country: "Ukraine" },
            followed: false,
            photoURL:
                "https://lh3.googleusercontent.com/proxy/gmhYE1jFPwxs4NuVFD8lyujDQdpww7TJ5C5n2i_rlKiA4vZp2E9zN5lie_aKdjcaLVoPVPpr",
        },
        {
            id: 2,
            fullName: "Vova",
            status: "I'm a boss",
            location: { city: "Odessa", country: "Ukraine" },
            followed: false,
            photoURL:
                "https://lh3.googleusercontent.com/proxy/gmhYE1jFPwxs4NuVFD8lyujDQdpww7TJ5C5n2i_rlKiA4vZp2E9zN5lie_aKdjcaLVoPVPpr",
        },
        {
            id: 3,
            fullName: "Vova",
            status: "I'm a boss",
            location: { city: "Odessa", country: "Ukraine" },
            followed: true,
            photoURL:
                "https://lh3.googleusercontent.com/proxy/gmhYE1jFPwxs4NuVFD8lyujDQdpww7TJ5C5n2i_rlKiA4vZp2E9zN5lie_aKdjcaLVoPVPpr",
        },
        {
            id: 4,
            fullName: "Vova",
            status: "I'm a boss",
            location: { city: "Odessa", country: "Ukraine" },
            followed: false,
            photoURL:
                "https://lh3.googleusercontent.com/proxy/gmhYE1jFPwxs4NuVFD8lyujDQdpww7TJ5C5n2i_rlKiA4vZp2E9zN5lie_aKdjcaLVoPVPpr",
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true,
                        };
                    }
                    return { ...u };
                }),
            };
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    console.log(`${u.id} => ${action.userId}`);
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false,
                        };
                    }
                    return { ...u };
                }),
            };
        }

        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] };
        }

        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export default usersReducer;
