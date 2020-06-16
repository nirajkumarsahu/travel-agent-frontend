import {
  FETCH_SEARCH_DATA,
  SEARCH_LOAD_SUCCESS,
  SEARCH_LOAD_FAILURE
} from "./SearchBox.constants";

export const searchLoadSuccess = data => ({
  type: SEARCH_LOAD_SUCCESS,
  data
});

export const searchLoadFailure = data => ({
  type: SEARCH_LOAD_FAILURE,
  data
});

export const fetchSearchData = data => ({
  type: FETCH_SEARCH_DATA,
  data
});
