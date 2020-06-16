import { put, takeLatest, call } from "redux-saga/effects";

import { apiFetch } from "lib/utils";
import { FooterLoadSuccess, FooterLoadFailure } from "./Footer.actions";
import { FETCH_FOOTER_DATA } from "./Footer.constants";

// eslint-disable-next-line
export function* fetchFooterData(action) {
  try {
    const res = yield call(apiFetch, {
      url: "https://jsonplaceholder.typicode.com/todos/2",
      method: "GET"
    });
    yield put(FooterLoadSuccess(res));
  } catch (err) {
    yield put(FooterLoadFailure(err));
  }
}

export default function* FooterSaga() {
  try {
    yield takeLatest(FETCH_FOOTER_DATA, fetchFooterData);
  } catch (err) {
    yield put(FooterLoadFailure(err));
  }
}
