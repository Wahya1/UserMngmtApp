import React, { Component } from "react";

import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../../redux/UserReducer/action";

class UserList extends Component {

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    const { dispatch } = this.props;

    dispatch({ type: FETCH_USERS_REQUEST });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok)
          throw new Error("error when fetching data");
        return response.json();
      })
      .then((data) => {
        dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
      });
  };

  render() {
    
    const { loading, users, error } = this.props;
    console.log({ loading, users, error });
    if (loading) return <p>Chargement...</p>; 
    if (error) return <p>Erreur : {error}</p>;

    return (
      <div>
        {users.map((user) => (
          <UserItemContainer key={user.id} name={user.name} username={user.username} email={user.email} adress ={user.adress}/>
        ))}
      </div>
    );
  }
}

export default UserList;
