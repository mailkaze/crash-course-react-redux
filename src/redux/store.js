import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  name: "",
  age: 0,
}

export default createStore(reducer, initialState)