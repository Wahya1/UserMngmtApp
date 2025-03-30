import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { filterUsersSearch } from "../../redux/UserReducer/action";

const Search = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users || []);
  const [searchState, setSearchState] = useState("");

  useEffect(() => {
    console.log("i am searching ");
    console.log({ users });

    if (searchState.trim() !== "") {
      console.log({ searchState });

      const filteredUsers = users.filter((user) =>
        user.username.toLowerCase().includes(searchState.toLowerCase())
      );

      if (filteredUsers.length !== users.length) {
        dispatch(filterUsersSearch(filteredUsers));
      }
    } else {
      dispatch(filterUsersSearch(users));
    }
  }, [searchState, users, dispatch]);

  return (
    <TextField
      label="Search Users"
      size="small"
      value={searchState}
      onChange={(e) => setSearchState(e.target.value)}
      InputLabelProps={{
        sx: {
          fontSize: "1.2rem",
          fontWeight: "bold",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{ height: "40%", width: "100%", bgcolor: "white" }}
    />
  );
};

export default Search;
