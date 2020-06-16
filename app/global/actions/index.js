import { fetchHeaderData } from "components/common/organisms/Header/Header.actions";
import {
  GLOBAL_DATA_FAILURE,
  SET_TIMEOUT_INFO,
  SET_VIEWPORT_INFO,
  LOGOUT_USER,
  EMAIL_SUBSCRIBE
} from "../constants";

export const globalDataFailure = error => ({
  type: GLOBAL_DATA_FAILURE,
  error
});

export const setPageTimeOut = data => ({
  type: SET_TIMEOUT_INFO,
  data
});

export const setViewPortInfo = data => ({
  type: SET_VIEWPORT_INFO,
  data
});

export const logoutAction = data => ({
  type: LOGOUT_USER,
  data
});

export const emailSubscribeAction = data => ({
  type: EMAIL_SUBSCRIBE,
  data
});

export default [fetchHeaderData];
