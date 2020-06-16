import { put, takeLatest, call } from "redux-saga/effects";
/**
 * imports required for TLL Setup
 * */
import { apiFetch } from "lib/utils";
import { GET_CITIES_URL } from "global/constants/urls";
import { setCityInfo } from "./CitiesModal.action";
import { GET_CITY_INFO } from "./CitiesModal.constants";

// eslint-disable-next-line
export function* getCityInfo(action) {
  try {
    const {
      data: { cb }
    } = action;
    const res = yield call(apiFetch, {
      url: GET_CITIES_URL,
      method: "GET"
    });
    yield put(setCityInfo(res.data));
    if (cb) cb(res);
  } catch (err) {
    // eslint-disable-next-line
    yield console.log(err);
  }
}

export default function* CitiesModalSaga() {
  try {
    yield takeLatest(GET_CITY_INFO, getCityInfo);
  } catch (err) {
    // eslint-disable-next-line
    yield console.log(err);
  }
}
