import { createStore } from "redux";
// reducer as fuction witch creates actions
import reducer from "./reducers";

const store = createStore(reducer);

export default store;
