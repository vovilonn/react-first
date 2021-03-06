const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    posts: [
        { id: 1, message: "Hi! How are you?" },
        { id: 2, message: "It's my first post" },
    ],
    newPostText: "VAXPILZDU",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText.trim() !== "") {
                const newPost = {
                    id: 5,
                    message: state.newPostText,
                };

                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: "",
                };
            }
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;
