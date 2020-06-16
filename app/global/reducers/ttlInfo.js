import { SET_TIMEOUT_INFO } from "../constants";

const updateTimingInfo = (state, data) => {
  const { key, time } = data;
  return {
    ...state,
    [key]: time
  };
};

export default function(state = {}, action) {
  switch (action.type) {
    case SET_TIMEOUT_INFO:
      return updateTimingInfo(state, action.data);
    default:
      return state;
  }
}
