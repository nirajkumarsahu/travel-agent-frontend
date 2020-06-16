import {
  ABOUTPAGE_FETCH_LOAD_DATA,
  ABOUTPAGE_FETCH_DATA_SUCCESS,
  ABOUTPAGE_FETCH_DATA_FAILURE
} from "./About.constants";

export const aboutPageLoadSuccess = data => ({
  type: ABOUTPAGE_FETCH_DATA_SUCCESS,
  data
});

export const aboutPageLoadFailure = data => ({
  type: ABOUTPAGE_FETCH_DATA_FAILURE,
  data
});

export const fetchAboutPageData = () => ({
  type: ABOUTPAGE_FETCH_LOAD_DATA
});

export default [fetchAboutPageData];
