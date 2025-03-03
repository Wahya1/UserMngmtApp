import { connect } from "react-redux";

import UserItems from "./component";
import { deleteUser } from "../../redux/UserReducer/action";

const mapDispatchToProps = {
  deleteUser,
};
const UserItemContainer = connect(null, mapDispatchToProps)(UserItems);
export default UserItemContainer;
