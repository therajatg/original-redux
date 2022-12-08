import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

export const IceCreamContainer = () => {
  const numberOfIceCreams = useSelector(
    (store) => store.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();
  return (
    <>
      <h2>Number of IceCreams - {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </>
  );
};
