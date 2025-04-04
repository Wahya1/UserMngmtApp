import { useDispatch } from "react-redux";

const useDispatchedAction = (action) => {
  const dispatch = useDispatch();

  return (...agrs) => {
    dispatch(action(...agrs));
  };
};

export default useDispatchedAction;
