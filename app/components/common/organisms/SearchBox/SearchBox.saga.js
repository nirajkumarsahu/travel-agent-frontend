import { put, takeLatest, call } from "redux-saga/effects";

import { apiFetch } from "lib/utils";
import { searchLoadSuccess, searchLoadFailure } from "./SearchBox.actions";
import { FETCH_SEARCH_DATA } from "./SearchBox.constants";

// eslint-disable-next-line
export function* fetchSearchData(action) {
  const { value, callback = () => {} } = action && action.data;
  try {
    const res = yield call(apiFetch, {
      url: `https://as.fabhotels.com/api/auto-suggest/v2?defaultSearch=false&algo=2&source=travelagent&visitorId=&query=${value}`,
      method: "GET"
    });
    yield put(searchLoadSuccess(res));
    if (callback) callback();
  } catch (err) {
    yield put(searchLoadFailure(err));
  }
}

export default function* searchSaga() {
  try {
    yield takeLatest(FETCH_SEARCH_DATA, fetchSearchData);
  } catch (err) {
    yield put(searchLoadFailure(err));
  }
}
