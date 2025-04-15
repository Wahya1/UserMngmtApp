import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { filterUsersSearch } from "../../redux/UsersReducer/action";
import useDispatchedAction from "../../hooks/useDispatchedAction";

const Search = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users || []);
  const [searchState, setSearchState] = useState("");

  const handlfilterUsersSearch = useDispatchedAction(filterUsersSearch);

  useEffect(() => {
    if (searchState.trim() !== "") {
      console.log({ searchState });

      const filteredUsers = users.filter((user) =>
        user.username.toLowerCase().includes(searchState.toLowerCase())
      );

      if (filteredUsers.length !== users.length) {
        handlfilterUsersSearch(filteredUsers);
      }
    } else {
      handlfilterUsersSearch(users);
    }
  }, [searchState, users, dispatch, handlfilterUsersSearch]);

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
