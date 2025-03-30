import { useParams } from "react-router-dom";

const UserDetails = () => {
  let { id } = useParams();
  return <h1>UserDetails page :{id}</h1>;
};
export default UserDetails;

// const   location = useLocation(); from react router dom
// const queryParam = new URLSearchParams(location.search)
// const myParam = queryParams.get("queryname")
