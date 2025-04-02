import { useNavigate, useParams } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import { Button, CircularProgress } from "@mui/material";

const UserDetails = () => {
  let { id } = useParams();
  const usersData = useUsers();
  const user = usersData.find((user) => user.id === parseInt(id));
  console.log({ user });
  const navigate = useNavigate();
  const display = () => {
    navigate("/");
  };

  if (usersData == null || usersData.isLoading)
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <CircularProgress size={24} />
      </div>
    );

  return (
    <>
      <Button onClick={display}>Go back</Button>
      <h1>hello user :{id}</h1>
    </>
  );
};
export default UserDetails;

// const   location = useLocation(); from react router dom
// const queryParam = new URLSearchParams(location.search)
// const myParam = queryParams.get("queryname")
