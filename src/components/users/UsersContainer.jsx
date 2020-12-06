import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = ({ usersPage }) => ({
    users: usersPage.users,
});
const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
});

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default usersContainer;
