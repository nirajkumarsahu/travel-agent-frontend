import { updateError } from "lib/utils";
import { combineReducers } from "redux";
import searchBoxReducer from "components/common/organisms/SearchBox/SearchBox.reducer";
import {
  HOMEPAGE_FETCH_DATA_SUCCESS,
  HOME_PAGE_LOAD_FAILURE,
  FETCH_GUEST_REVIEW_DATA_SUCCESS,
  FETCH_VIDEO_REVIEW_DATA_SUCCESS
} from "./Review.constants";

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

function guestReviewDataReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_GUEST_REVIEW_DATA_SUCCESS: {
      const { page } = action.data.data;
      const tempData = action.data;
      if (page > 1) {
        const { reviews: prevReviews } = state.data;
        const { reviews: newReviews } = action.data.data;
        tempData.data.reviews = [...prevReviews, ...newReviews];
      }
      return updatedData(state, tempData);
    }
    default:
      return state;
  }
}

function videoReviewDataReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_VIDEO_REVIEW_DATA_SUCCESS: {
      const { page } = action.data.data;
      const tempData = action.data;
      if (page > 1) {
        const { reviews: prevReviews } = state.data;
        const { reviews: newReviews } = action.data.data;
        tempData.data.reviews = [...prevReviews, ...newReviews];
      }
      return updatedData(state, tempData);
    }
    default:
      return state;
  }
}

export default combineReducers({
  searchBoxReducer,
  homePageData: homePageReducer,
  guestReviews: guestReviewDataReducer,
  videoReviews: videoReviewDataReducer
});
