import { put, all, call, takeLatest } from "redux-saga/effects";

import headerSaga from "components/common/organisms/Header/Header.saga";
import loginModalSaga from "components/common/molecules/LoginModal/LoginModal.saga";
import footerImagesSaga from "components/common/molecules/FooterImages/FooterImages.saga";
import CitiesModalSaga from "components/common/molecules/CitiesModal/CitiesModal.saga";
import { apiFetch } from "lib/utils";
import { fetchHomePageData } from "components/features/Home/templates/HomePage.actions";
import { globalDataFailure } from "../actions";
import { LOGOUT_USER, EMAIL_SUBSCRIBE } from "../constants";
import { USER_LOG_OUT, EMAIL_SUBSCRIBE_URL } from "../constants/urls";

function* logUserOutSaga(action) {
  try {
    const { callback } = action.data;
    const res = yield call(apiFetch, { url: USER_LOG_OUT });
    localStorage.removeItem("user");
    // eslint-disable-next-line no-restricted-globals
    location.reload();
    yield put(fetchHomePageData());
    if (callback) callback(res);
  } catch (err) {
    // eslint-disable-next-line no-unused-expressions
    err;
  }
}

function* subscribe(action) {
  try {
    const { callback, ...payload } = action.data;

    const res = yield call(apiFetch, {
      url: EMAIL_SUBSCRIBE_URL,
      method: "POST",
      data: payload
      // params: payload
    });

    if (callback) callback(res);
  } catch (err) {
    // eslint-disable-next-line no-unused-expressions
    err;
  }
}

export default function* globalSaga() {
  try {
    yield all([
      call(headerSaga),
      call(loginModalSaga),
      call(CitiesModalSaga),
      call(footerImagesSaga),
      takeLatest(LOGOUT_USER, logUserOutSaga),
      takeLatest(EMAIL_SUBSCRIBE, subscribe)
    ]);
  } catch (err) {
    yield put(globalDataFailure(err));
  }
}
