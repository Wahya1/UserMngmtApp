import React from "react";

import UserList from "../../components/UserList/component";
import Navbar from "../../components/Navbar/component";
import Footer from "../../components/Footer/component";

const Home = () => {
  return (
    <>
      <Navbar />
      <UserList />
      <Footer />
    </>
  );
};

export default Home;
