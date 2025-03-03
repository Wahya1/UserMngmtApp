import { connect } from "react-redux";

import UserList from "./component";
import { addUser } from "../../redux/UserReducer/action";

const mapStateToProps = ({ user: { loading, users, error } }) => ({
  loading,
  users,
  error,
});

const mapDispatchToProps = { addUser };

const UserListContainer = connect(
  mapStateToProps
)(UserList);

export default UserListContainer;
