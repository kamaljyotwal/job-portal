import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  auth: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : { token: null },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "auth-success":
      return {
        auth: payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, composeWithDevTools());
export default store;
