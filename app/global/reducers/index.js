import { combineReducers } from "redux";
import header from "components/common/organisms/Header/Header.reducer";
import ttlInfo from "./ttlInfo";
import globalData from "./globalData";

// Combines all reducers to a single reducer function
const globalReducer = combineReducers({
  header,
  ttlInfo,
  globalData
});

export default globalReducer;
