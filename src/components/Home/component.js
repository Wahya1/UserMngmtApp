import React, { Component } from "react";

import UserListContainer from "../UserList";
import Navbar from "../Navbar/component";
import Footer from "../Footer/component";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <UserListContainer />
        <Footer />
      </>
    );
  }
}

export default Home;
