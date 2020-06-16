import { put, takeLatest, call, select, all } from "redux-saga/effects";
/**
 * imports required for TLL Setup
 * */
import { apiFetch, ttlActionTrigger, getPageTimeStamp } from "lib/utils";
import { setPageTimeOut } from "global/actions";
import { HOMEPAGE_KEY, ttlIntervalConfig } from "global/constants";
import { GET_HOME_PAGE, GET_USER_PROFILE_URL } from "global/constants/urls";

import searchBoxSaga from "components/common/organisms/SearchBox/SearchBox.saga";
import fabulousSaga from "components/features/Home/molecules/Fabulous/Fabulous.saga";
import cardActionSaga from "components/common/molecules/CardActions/CardActions.saga";
import {
  homePageLoadSuccess,
  homePageLoadFailure,
  fetchUserProfile
} from "./HomePage.actions";
import { FETCH_HOMEPAGE_DATA } from "./HomePage.constants";

// eslint-disable-next-line
export function* fetchUserProfileSaga() {
  try {
    const res = yield call(apiFetch, {
      url: GET_USER_PROFILE_URL,
      method: "GET"
    });
    yield put(fetchUserProfile(res.data));
  } catch (err) {
    yield put(homePageLoadFailure(err));
  }
}

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
    if (!res.data.bannersignup) {
      yield fetchUserProfileSaga();
    }
    const ttlInfo = yield select(getPageTimeStamp);
    const timeStamp = yield call(
      ttlActionTrigger,
      ttlInfo[HOMEPAGE_KEY],
      ttlIntervalConfig[HOMEPAGE_KEY]
    );
    yield put(setPageTimeOut({ key: HOMEPAGE_KEY, time: timeStamp }));
    yield put(homePageLoadSuccess(res));
  } catch (err) {
    yield put(homePageLoadFailure(err));
  }
}

export default function* homePageSaga() {
  try {
    yield all([
      takeLatest(FETCH_HOMEPAGE_DATA, fetchHomePageData),
      call(searchBoxSaga),
      call(cardActionSaga),
      call(fabulousSaga)
    ]);
  } catch (err) {
    yield put(homePageLoadFailure(err));
  }
}
