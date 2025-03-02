import { connect } from "react-redux";

import UserItems from "./component";
import { deleteUser, updateUser } from "../../redux/UserReducer/action";

const mapDispatchToProps = {
  deleteUser,
  updateUser,
};
const UserItemContainer = connect(null, mapDispatchToProps)(UserItems);
export default UserItemContainer;
