import { Button } from "@mui/material";

const { Component } = require("react");

class UserItems extends Component {
  handlDelete = () => {
    return this.props.deleteUser(this.props.id);
  };

  handUpdate = (e) => {
    const { name, value } = e.target;
    const { address } = this.props;
    if (name === "street" || name === "city") {
      return this.props.updateUser({
        ...this.props,
        address: {
          ...address,
          [name]: value,
        },
      });
    }
    return this.props.updateUser({ ...this.props, [name]: value });
  };

  render() {
    const { id, name, username, email, address, phone } = this.props;
    return (
      <>
        <div>
          <input type="text" name="id" value={id} onChange={this.handUpdate} />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handUpdate}
          />
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handUpdate}
          />
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={this.handUpdate}
          />
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={this.handUpdate}
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handUpdate}
          />
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.handUpdate}
          />

          <Button variant="text" onClick={this.handUpdate}>
            Update
          </Button>
          <Button variant="text" onClick={this.handlDelete}>
            Delete
          </Button>
        </div>
      </>
    );
  }
}

export default UserItems;
