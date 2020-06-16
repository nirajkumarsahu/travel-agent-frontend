import { SET_FABULOUS_INFO, SET_FABULOUS_TERMS } from "./Fabulous.constants";

const updatedData = (state, data, key) => ({
  ...state,
  ...{ ...state.fabulous, [key]: data }
});

function fabulousReducer(state = {}, action) {
  switch (action.type) {
    case SET_FABULOUS_INFO:
      return updatedData(state, action.data, "fabInfo");
    case SET_FABULOUS_TERMS:
      return updatedData(state, action.data, "terms");
    default:
      return state;
  }
}

export default fabulousReducer;
