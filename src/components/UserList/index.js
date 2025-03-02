import { connect } from "react-redux";

import UserList from "./component";
import store from "../../redux/store";

const mapStateToProps = (state) => {
  console.log(store);
  return {
    loading: state.users.loading,
    users: state.users.users,
    error: state.users.error,
  };
};

const UserListContainer = connect(mapStateToProps)(UserList);
export default UserListContainer;
