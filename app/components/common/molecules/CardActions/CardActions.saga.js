/* eslint-disable no-var */
import { put, takeLatest, call } from "redux-saga/effects";
import { globalDataFailure } from "global/actions";
import { apiFetch } from "lib/utils";
import { BASE_URL } from "global/constants/urls";
import { ACTION_BUTTON_CLICK } from "./CardActions.constants";

function OpenInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}

export function* actionButtonSaga(action) {
  const { data } = action;
  try {
    const { actionType, endPoint, setSuccessModal = () => {} } = data;
    if (actionType.indexOf("PAYMENT") !== -1) {
      const res = yield call(apiFetch, {
        url: `${BASE_URL}/${endPoint}`,
        method: "GET"
      });
      if (res.data.paymentLink && res.data.paymentLink.link)
        // eslint-disable-next-line vars-on-top
        var link = `${BASE_URL}/checkout/paymentlink?link=${res.data.paymentLink.link}&utm_source=paymentlink&utm_medium=paymentlink`;
      yield (window.location = link);
    }

    if (actionType.indexOf("MAP_LINK") !== -1) {
      const res = yield call(apiFetch, {
        url: `${BASE_URL}/${endPoint}`,
        method: "GET"
      });
      if (res.data.map) OpenInNewTab(res.data.map);
    }

    if (actionType.indexOf("INVOICE") !== -1) {
      const res = yield apiFetch({
        url: `${BASE_URL}/${endPoint}`,
        method: "get"
      });
      if (setSuccessModal && res.message) setSuccessModal(res);
    }

    if (actionType === "HELPLINE") {
      yield (window.location = `tel:${endPoint}`);
    }
    if (actionType.indexOf("REVIEW") !== -1) {
      const res = yield apiFetch({
        url: `${BASE_URL}/${endPoint}`,
        method: "get"
      });
      yield (window.location = `${res.data.url}`);
    }

    if (actionType === "CONTACT_GDO") {
      yield (window.location = `tel:${endPoint}`);
    }
  } catch (err) {
    yield put(globalDataFailure(err));
  }
}

export default function* cardActionSaga() {
  try {
    yield takeLatest(ACTION_BUTTON_CLICK, actionButtonSaga);
  } catch (err) {
    yield put(globalDataFailure(err));
  }
}
