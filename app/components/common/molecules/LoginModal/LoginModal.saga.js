import { put, takeLatest, call } from "redux-saga/effects";
/**
 * imports required for TLL Setup
 * */
import { apiFetch } from "lib/utils";
import {
  USER_LOGIN,
  USER_LOGIN_OTP,
  RESEND_OTP_URL,
  GET_COUNTRY_CODES_URL
} from "global/constants/urls";
import { loginFailure } from "./LoginModal.actions";
import { fetchHomePageData } from "../../../features/Home/templates/HomePage.actions";
import {
  LOGIN_FORM_PHONE_SUBMIT,
  LOGIN_FORM_OTP_SUBMIT,
  RESEND_OTP,
  GET_COUNTRY_CODES
} from "./LoginModal.constants";

// eslint-disable-next-line
export function* loginPhoneSaga(action) {
  const {
    data: { cb, ...dat }
  } = action;
  try {
    const res = yield call(apiFetch, {
      url: USER_LOGIN,
      method: "post",
      data: dat
    });
    if (cb) cb(res);
  } catch (err) {
    yield cb({ isError: true });
  }
}

export function* loginOtpSaga(action) {
  const {
    data: { cb, ...dat }
  } = action;
  try {
    const res = yield call(apiFetch, {
      url: USER_LOGIN_OTP,
      method: "post",
      data: dat
    });

    localStorage.setItem("user", JSON.stringify(res.data));
    yield put(fetchHomePageData());
    if (cb) cb();
  } catch (err) {
    if (cb) cb(err);
    yield put(loginFailure(err));
  }
}

export function* resendOtp(action) {
  const {
    data: { cb, ...dat }
  } = action;
  try {
    const res = yield call(apiFetch, {
      url: RESEND_OTP_URL,
      method: "post",
      data: dat
    });
    if (cb) cb(res);
  } catch (err) {
    if (cb) cb(err.response.data);
    yield put(loginFailure(err));
  }
}

export function* getCountryCodes(action) {
  const { data: cb } = action;
  try {
    const res = yield call(apiFetch, {
      url: GET_COUNTRY_CODES_URL,
      method: "GET"
    });
    if (cb) cb(res.data);
  } catch (err) {
    yield put(loginFailure(err));
  }
}

export default function* LoginModalSaga() {
  try {
    yield takeLatest(LOGIN_FORM_PHONE_SUBMIT, loginPhoneSaga);
    yield takeLatest(LOGIN_FORM_OTP_SUBMIT, loginOtpSaga);
    yield takeLatest(RESEND_OTP, resendOtp);
    yield takeLatest(GET_COUNTRY_CODES, getCountryCodes);
  } catch (err) {
    yield put(loginFailure(err));
  }
}
