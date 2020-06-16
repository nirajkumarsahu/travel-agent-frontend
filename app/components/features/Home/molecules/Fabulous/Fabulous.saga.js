import { put, takeLatest, call } from "redux-saga/effects";
/**
 * imports required for TLL Setup
 * */
import { apiFetch } from "lib/utils";
import { GET_FABULOUS_INFO_URL, BASE_URL } from "global/constants/urls";

import { GET_FABULOUS_INFO, GET_FABULOUS_TERMS } from "./Fabulous.constants";
import { setFabulousInfo, setFabulousTerms } from "./Fabulous.action";

// eslint-disable-next-line
export function* getFabulousInfo(action) {
  try {
    const {
      data: { cb }
    } = action;
    const res = yield call(apiFetch, {
      url: GET_FABULOUS_INFO_URL,
      method: "GET"
    });
    yield put(setFabulousInfo(res.data));
    if (cb) cb(res);
  } catch (err) {
    // eslint-disable-next-line
    yield console.log(err);
  }
}

export function* getFabulousTerms(action) {
  try {
    const {
      data: { cb, termsUrl }
    } = action;
    const res = yield call(apiFetch, {
      url: `${BASE_URL}${termsUrl}`,
      method: "GET"
    });
    yield put(setFabulousTerms(res.data));
    if (cb) cb(res);
  } catch (err) {
    // eslint-disable-next-line
    yield console.log(err);
  }
}

export default function* LoginModalSaga() {
  try {
    yield takeLatest(GET_FABULOUS_INFO, getFabulousInfo);
    yield takeLatest(GET_FABULOUS_TERMS, getFabulousTerms);
  } catch (err) {
    // eslint-disable-next-line
    yield console.log(err);
  }
}
