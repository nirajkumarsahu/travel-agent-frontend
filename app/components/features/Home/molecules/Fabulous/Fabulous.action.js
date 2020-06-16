import {
  GET_FABULOUS_INFO,
  GET_FABULOUS_TERMS,
  SET_FABULOUS_INFO,
  SET_FABULOUS_TERMS
} from "./Fabulous.constants";

export const getFabulousInfo = data => ({
  type: GET_FABULOUS_INFO,
  data
});

export const setFabulousInfo = data => ({
  type: SET_FABULOUS_INFO,
  data
});

export const getFabulousTerms = data => ({
  type: GET_FABULOUS_TERMS,
  data
});

export const setFabulousTerms = data => ({
  type: SET_FABULOUS_TERMS,
  data
});
