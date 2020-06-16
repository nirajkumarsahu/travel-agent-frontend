import { ABOUTPAGE_FETCH_DATA_SUCCESS } from "./About.constants";

const updatedData = (state, data) => ({
  ...state,
  data
});

export default function(state = {}, action) {
  switch (action.type) {
    case ABOUTPAGE_FETCH_DATA_SUCCESS:
      return updatedData(state, action.data);
    default:
      return state;
  }
}
