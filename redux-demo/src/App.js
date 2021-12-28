import "./App.css";
import Counter from "./Counter/Counter";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Users/Products";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Products />
    </Provider>
  );
}

export default App;
