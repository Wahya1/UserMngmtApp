import { useSelector } from "react-redux";
import useDispatchedAction from "./useDispatchedAction";

import {
  fetchUsersFailure,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "../redux/UsersReducer/action";

import { useEffect } from "react";

const useUsers = () => {
  const usersData = useSelector((store) => store.users.users);
  console.log("usersdata:", { usersData });

  const handleFetchUsersRequest = useDispatchedAction(fetchUsersRequest);
  const handleFetchUsersSuccess = useDispatchedAction(fetchUsersSuccess);
  const handleFetchUsersFailure = useDispatchedAction(fetchUsersFailure);

  useEffect(() => {
    handleFetchUsersRequest();

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("error when users fetching ");
      })
      .then((data) => {
        console.log("mapped data ::::::::::::::::::::::");
        const mappedData = data.slice(0, 6);
        handleFetchUsersSuccess(mappedData);
      })
      .catch((error) => {
        handleFetchUsersFailure(error.message);
      });
  }, []);

  return usersData;
};

export default useUsers;
