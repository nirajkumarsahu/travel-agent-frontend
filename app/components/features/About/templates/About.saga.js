import { put, takeLatest, call, select } from "redux-saga/effects";
import { ttlActionTrigger, getPageTimeStamp } from "lib/utils";
import { ABOUTPAGE_KEY, ttlIntervalConfig } from "global/constants";
import { setPageTimeOut } from "global/actions";

import { aboutPageLoadSuccess, aboutPageLoadFailure } from "./About.actions";
import { ABOUTPAGE_FETCH_LOAD_DATA } from "./About.constants";

export function* fetchAboutPageData(action) {
  try {
    const data = action.type;
    const ttlInfo = yield select(getPageTimeStamp);
    const timeStamp = yield call(
      ttlActionTrigger,
      ttlInfo[ABOUTPAGE_KEY],
      ttlIntervalConfig[ABOUTPAGE_KEY]
    );
    yield put(setPageTimeOut({ key: ABOUTPAGE_KEY, time: timeStamp }));
    yield put(aboutPageLoadSuccess(data));
  } catch (err) {
    yield put(aboutPageLoadFailure(err));
  }
}

export default function* aboutPageSaga() {
  try {
    yield takeLatest(ABOUTPAGE_FETCH_LOAD_DATA, fetchAboutPageData);
  } catch (err) {
    yield put(aboutPageLoadFailure(err));
  }
}
