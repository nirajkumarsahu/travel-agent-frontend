import {
  HOMEPAGE_FETCH_DATA_SUCCESS,
  FETCH_HOMEPAGE_DATA,
  HOME_PAGE_LOAD_FAILURE,
  FETCH_USER_PROFILE
} from "./HomePage.constants";

export const homePageLoadSuccess = data => ({
  type: HOMEPAGE_FETCH_DATA_SUCCESS,
  data
});

export const fetchHomePageData = data => ({
  type: FETCH_HOMEPAGE_DATA,
  data
});

export const fetchUserProfile = data => ({
  type: FETCH_USER_PROFILE,
  data
});

export const homePageLoadFailure = () => ({
  type: HOME_PAGE_LOAD_FAILURE
});

export default [fetchHomePageData];
