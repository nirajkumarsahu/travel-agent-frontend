import { put, takeLatest, call } from "redux-saga/effects";

import { apiFetch } from "lib/utils";
import { headerLoadSuccess, headerLoadFailure } from "./Header.actions";
import { FETCH_HEADER_DATA } from "./Header.constants";

// eslint-disable-next-line
export function* fetchHeaderData(action) {
  try {
    const res = yield call(apiFetch, {
      url: "https://jsonplaceholder.typicode.com/todos/2",
      method: "GET"
    });
    yield put(headerLoadSuccess(res));
  } catch (err) {
    yield put(headerLoadFailure(err));
  }
}

export default function* headerSaga() {
  try {
    yield takeLatest(FETCH_HEADER_DATA, fetchHeaderData);
  } catch (err) {
    yield put(headerLoadFailure(err));
  }
}
