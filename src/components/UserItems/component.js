import {Button}  from  React;
const { Component, default: React } = require("react");

class UserItems extends Component {
  render() {
    const { name, username, email, address, phone, deleteUser, updateUser } =
      this.props;
    const fulladdress = `${address.city}, ${address.street}`;
    return (
      <>
        <div>
          <input type="text" name="name" value={name} />
          <input type="text" name="username" value={username} />
          <input type="text" name="address" value={fulladdress} />
          <input type="text" name="email" value={email} />
          <input type="text" name="phone" value={phone} />
        </div>
        <Button onClick={deleteUser}>update</Button>
        <Button onClick={updateUser}>delete</Button>
      </>
    );
  }
}

export default UserItems;
