import { connect } from "react-redux";

import UserList from "./component";

const mapStateToProps = ({ user: { loading, users, error } }) => ({
  loading,
  users,
  error,
});

const UserListContainer = connect(mapStateToProps)(UserList);
export default UserListContainer;
