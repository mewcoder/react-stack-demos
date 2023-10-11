import { legacy_createStore as createStore } from "redux";
import { cloneDeep } from "lodash";

const initialState = {
  num: 0,
};

const reducer = function reducer(_state = initialState, action) {
  const state = cloneDeep(_state);
  const { type, payload = 1 } = action;
  switch (type) {
    case "PLUS":
      state.num += payload;
      break;
    case "MINUS":
      state.num -= payload;
      break;
    default:
  }
  return state;
};

const store = createStore(reducer);

export default store;
