import { put, takeLatest, call } from "redux-saga/effects";
import { apiFetch } from "lib/utils";
import { API_URLS } from "global/constants";
import { globalDataFailure } from "global/actions";
import {
  fetchCountryListDataSuccess,
  signupPageLoadSuccess,
  signupPageLoadFailure
} from "./SignupPage.actions";
import {
  FETCH_COUNTRY_LIST_DATA,
  SEND_SIGNUP_FORM,
  FETCH_SIGNUP_DATA
} from "./SignupPage.constants";

function* fetchCountryListDataSaga() {
  try {
    const { domain, countryList } = API_URLS;
    const res = yield call(apiFetch, {
      url: `${domain}${countryList}`,
      method: "GET"
    });
    yield put(fetchCountryListDataSuccess(res.data));
  } catch (err) {
    yield put(globalDataFailure({ key: "fetchCountryListDataSagaError", err }));
  }
}
function* sendSignupFormSaga(action) {
  try {
    const { domain, signup } = API_URLS;
    const {
      data: { data }
    } = action;
    const res = yield call(apiFetch, {
      url: `${domain}${signup}`,
      method: "POST",
      data
    });
    const { callback } = action && action.data;
    if (res && res.status === 200 && callback) {
      callback({ error: false });
    } else {
      callback({ error: true });
    }
  } catch (err) {
    const { callback } = action && action.data;
    if (callback) callback({ error: true });
  }
}

function* fetchSignupPageData() {
  const { domain, signupPage } = API_URLS;
  try {
    const res = yield call(apiFetch, {
      url: `${domain}${signupPage}`,
      method: "GET"
    });
    yield put(signupPageLoadSuccess(res && res.data));
  } catch (err) {
    yield put(signupPageLoadFailure(err));
  }
}

export default function* signupPageSaga() {
  try {
    yield takeLatest(FETCH_COUNTRY_LIST_DATA, fetchCountryListDataSaga);
    yield takeLatest(SEND_SIGNUP_FORM, sendSignupFormSaga);
    yield takeLatest(FETCH_SIGNUP_DATA, fetchSignupPageData);
  } catch (err) {
    yield put(globalDataFailure({ key: "signupPageSagaError", err }));
  }
}
