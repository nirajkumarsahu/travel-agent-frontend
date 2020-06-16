/* eslint-disable no-console */
import { takeLatest, call } from "redux-saga/effects";
/**
 * imports required for TLL Setup
 * */
import { apiFetch } from "lib/utils";
import { SEND_APPLINK_URL } from "global/constants/urls";
import { SEND_APPLINK } from "./FooterImages.constants";

// eslint-disable-next-line
export function* sendAppLink(action) {
  const {
    data: { cb, ...dat }
  } = action;
  try {
    const res = yield call(apiFetch, {
      url: SEND_APPLINK_URL,
      method: "GET",
      params: dat
    });
    if (cb) cb(res);
  } catch (err) {
    if (cb) cb();
    yield () => console.log(err)();
  }
}

export default function* sendAppLinkSaga() {
  try {
    yield takeLatest(SEND_APPLINK, sendAppLink);
  } catch (err) {
    yield () => console.log(err)();
  }
}
