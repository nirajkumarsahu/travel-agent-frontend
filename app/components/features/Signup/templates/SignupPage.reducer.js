import {
  FETCH_COUNTRY_LIST_DATA_SUCCESS,
  SIGNUP_FETCH_DATA_SUCCESS
} from "./SignupPage.constants";

const updatedData = (state, data) => ({
  ...state,
  countryList: data
});

function signupPageReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_COUNTRY_LIST_DATA_SUCCESS:
      return updatedData(state, action.data);
    case SIGNUP_FETCH_DATA_SUCCESS:
      return { ...state, signupPageData: action.data };
    default:
      return state;
  }
}

export default signupPageReducer;
