import { put, takeLatest, call, select, all } from "redux-saga/effects";
/**
 * imports required for TLL Setup
 * */
import { apiFetch, ttlActionTrigger, getPageTimeStamp } from "lib/utils";
import { setPageTimeOut } from "global/actions";
import { REVIEW_KEY, ttlIntervalConfig } from "global/constants";
import {
  GET_HOME_PAGE,
  GET_GUEST_REVIEW_URL,
  GET_VIDEO_REVIEW_URL
} from "global/constants/urls";

import searchBoxSaga from "components/common/organisms/SearchBox/SearchBox.saga";
import {
  homePageLoadSuccess,
  homePageLoadFailure,
  fetchGuestReviewDataSuccess,
  fetchVideoReviewDataSuccess
} from "./Review.actions";
import {
  FETCH_HOMEPAGE_DATA,
  FETCH_GUEST_REVIEW_DATA,
  FETCH_VIDEO_REVIEW_DATA
} from "./Review.constants";

export function* fetchHomePageData(action) {
  try {
    const { requestDetails } = action;
    const cookies =
      requestDetails && requestDetails.cookies ? requestDetails.cookies : "";

    const res = yield call(
      apiFetch,
      {
        url: GET_HOME_PAGE,
        method: "GET"
      },
      cookies
    );
    const ttlInfo = yield select(getPageTimeStamp);
    const timeStamp = yield call(
      ttlActionTrigger,
      ttlInfo[REVIEW_KEY],
      ttlIntervalConfig[REVIEW_KEY]
    );
    yield put(setPageTimeOut({ key: REVIEW_KEY, time: timeStamp }));
    yield put(homePageLoadSuccess(res));
  } catch (err) {
    yield put(homePageLoadFailure(err));
  }
}

export function* fetchGuestReviewDataSaga(action) {
  const { data = 1 } = action;
  try {
    const res = yield call(apiFetch, {
      url: `${GET_GUEST_REVIEW_URL}?page=${data}`,
      method: "GET"
    });
    yield put(fetchGuestReviewDataSuccess({ data: res.data }));
  } catch (err) {
    yield put(homePageLoadFailure(err));
  }
}

export function* fetchVideoReviewDataSaga(action) {
  const { data } = action;
  try {
    const res = yield call(apiFetch, {
      url: `${GET_VIDEO_REVIEW_URL}?page=${data}`,
      method: "GET"
    });
    yield put(fetchVideoReviewDataSuccess({ data: res.data }));
  } catch (err) {
    yield put(homePageLoadFailure(err));
  }
}

export default function* reviewPageSaga() {
  try {
    yield all([
      takeLatest(FETCH_HOMEPAGE_DATA, fetchHomePageData),
      takeLatest(FETCH_GUEST_REVIEW_DATA, fetchGuestReviewDataSaga),
      takeLatest(FETCH_VIDEO_REVIEW_DATA, fetchVideoReviewDataSaga),
      call(searchBoxSaga)
    ]);
  } catch (err) {
    yield put(homePageLoadFailure(err));
  }
}
