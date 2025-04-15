import { useSelector } from "react-redux";
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "../redux/UserReducer/action";

const useUser = () => {
  const userData = useSelector((store) => store.user);

  const handlefetchUserRequest = useDispatchedAction(fetchUserRequest);
  const handlefetchUserSucces = useDispatchedAction(fetchUserSuccess);
  const handlefetchUserError = useDispatchedAction(fetchUserFailure);

  useEffect(() => {
    if (
      id !== null &&
      id != "" &&
      ((userData == null && userData == undefined) || userData.error != null)
    ) {
      handlefetchUserRequest(id);
      fetch("https://jsonplaceholder.typicode.com/users" + id)
        .then((res) => res.json())
        .then((data) => {
          handlefetchUserSucces(data);

          console.log("****************");
          console.log({ data });
        })
        .catch((err) => {
          handlefetchUserError(id, err.message);
        });
    }
  }, [id]);

  return userData;
};

export default useUser;
