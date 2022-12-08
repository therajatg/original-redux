import { useEffect } from "react";
import { userFetch } from "../redux";
import { useSelector, useDispatch } from "react-redux";

export const UserContainer = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((store) => store.user);
  useEffect(() => {
    dispatch(userFetch(dispatch));
  }, []);
  return (
    <>
      {loading && <h2>loading...</h2>}
      {error.length > 1 && <h2>error</h2>}
      {users.length > 1 && users.map((user) => <h3>{user}</h3>)}
    </>
  );
};
