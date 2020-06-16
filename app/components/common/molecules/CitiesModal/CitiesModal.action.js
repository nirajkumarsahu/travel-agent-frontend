import { GET_CITY_INFO, SET_CITY_INFO } from "./CitiesModal.constants";

export const getCityInfo = data => ({
  type: GET_CITY_INFO,
  data
});

export const setCityInfo = data => ({
  type: SET_CITY_INFO,
  data
});
