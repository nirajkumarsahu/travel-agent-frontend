import { SET_VIEWPORT_INFO } from "../constants";

const updateDeviceInfo = (state, data) => {
  return {
    ...state,
    isMobile: data
  };
};

export default function(state = {}, action) {
  switch (action.type) {
    case SET_VIEWPORT_INFO:
      return updateDeviceInfo(state, action.data);
    default:
      return state;
  }
}
