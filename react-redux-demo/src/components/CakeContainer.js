import { connect } from "react-redux";
import { buyCake } from "../redux";

export function CakeContainer(props) {
  return (
    <>
      <h2>Number Of Cakes: {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
