import {
  HOMEPAGE_FETCH_DATA_SUCCESS,
  FETCH_HOMEPAGE_DATA,
  HOME_PAGE_LOAD_FAILURE,
  FETCH_GUEST_REVIEW_DATA,
  FETCH_GUEST_REVIEW_DATA_SUCCESS,
  FETCH_VIDEO_REVIEW_DATA,
  FETCH_VIDEO_REVIEW_DATA_SUCCESS
} from "./Review.constants";

export const homePageLoadSuccess = data => ({
  type: HOMEPAGE_FETCH_DATA_SUCCESS,
  data
});

export const fetchHomePageData = data => ({
  type: FETCH_HOMEPAGE_DATA,
  data
});

export const homePageLoadFailure = () => ({
  type: HOME_PAGE_LOAD_FAILURE
});

export const fetchGuestReviewData = data => ({
  type: FETCH_GUEST_REVIEW_DATA,
  data
});

export const fetchGuestReviewDataSuccess = data => ({
  type: FETCH_GUEST_REVIEW_DATA_SUCCESS,
  data
});

export const fetchVideoReviewData = data => ({
  type: FETCH_VIDEO_REVIEW_DATA,
  data
});

export const fetchVideoReviewDataSuccess = data => ({
  type: FETCH_VIDEO_REVIEW_DATA_SUCCESS,
  data
});

export default [fetchHomePageData, fetchGuestReviewData];
