import { useParams } from "react-router-dom";

const UserUpdate = () => {
  let { id } = useParams();
  return <h1>Update user page :{id}</h1>;
};
export default UserUpdate;
