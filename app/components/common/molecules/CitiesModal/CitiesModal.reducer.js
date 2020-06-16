import { SET_CITY_INFO } from "./CitiesModal.constants";

const updatedData = (state, data) => ({
  ...state,
  ...data
});

function citiesReducer(state = {}, action) {
  switch (action.type) {
    case SET_CITY_INFO:
      return updatedData(state, action.data);
    default:
      return state;
  }
}

export default citiesReducer;
