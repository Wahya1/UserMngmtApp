import { useParams } from "react-router-dom";

const UserDetails = () => {
  let { id } = useParams();
  return <h1>UserDetails page :{id}</h1>;
};
export default UserDetails;
