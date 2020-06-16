import {
  FETCH_HEADER_DATA,
  HEADER_DATA_SUCCESS,
  HEADER_LOAD_FAILURE
} from "./Header.constants";

export const headerLoadSuccess = data => ({
  type: HEADER_DATA_SUCCESS,
  data
});

export const headerLoadFailure = data => ({
  type: HEADER_LOAD_FAILURE,
  data
});

export const fetchHeaderData = () => ({
  type: FETCH_HEADER_DATA
});
