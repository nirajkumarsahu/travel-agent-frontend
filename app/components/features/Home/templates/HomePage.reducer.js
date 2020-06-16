import { updateError } from "lib/utils";
import { combineReducers } from "redux";
import searchBoxReducer from "components/common/organisms/SearchBox/SearchBox.reducer";
import fabulous from "components/features/Home/molecules/Fabulous/Fabulous.reducer";
import cities from "components/common/molecules/CitiesModal/CitiesModal.reducer";
import {
  HOMEPAGE_FETCH_DATA_SUCCESS,
  HOME_PAGE_LOAD_FAILURE,
  FETCH_USER_PROFILE
} from "./HomePage.constants";

const updatedData = (state, data) => ({
  ...state,
  ...data
});

function homePageReducer(state = {}, action) {
  switch (action.type) {
    case HOMEPAGE_FETCH_DATA_SUCCESS:
      return updatedData(state, action.data);
    case HOME_PAGE_LOAD_FAILURE:
      return updateError(state, "error Occured in homepage load");
    default:
      return state;
  }
}

function userProfileReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return updatedData(state, action.data);
    default:
      return state;
  }
}

export default combineReducers({
  searchBoxReducer,
  homePageData: homePageReducer,
  userProfile: userProfileReducer,
  fabulous,
  cities
});
