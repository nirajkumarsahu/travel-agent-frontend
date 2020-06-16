import {
  FETCH_FOOTER_DATA,
  FOOTER_DATA_SUCCESS,
  FOOTER_LOAD_FAILURE
} from "./FooterResponsive.constants";

export const FooterLoadSuccess = data => ({
  type: FOOTER_DATA_SUCCESS,
  data
});

export const FooterLoadFailure = data => ({
  type: FOOTER_LOAD_FAILURE,
  data
});

export const fetchFooterData = () => ({
  type: FETCH_FOOTER_DATA
});
