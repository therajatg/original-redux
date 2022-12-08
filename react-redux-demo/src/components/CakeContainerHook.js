import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

export function CakeContainerHook() {
  const numberOfCakes = useSelector((store) => store.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Number Of Cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  );
}
