import { CakeContainer } from "./components/CakeContainer";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
import { CakeContainerHook } from "./components/CakeContainerHook";
import { IceCreamContainer } from "./components/IceCreamContainer";
import { UserContainer } from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainerHook />
        <IceCreamContainer /> */}
        <UserContainer />
        {/* <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
