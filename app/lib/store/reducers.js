import { combineReducers } from "redux";
import globalReducer from "../../global/reducers";

export default function createReducer(injectedReducers) {
  return combineReducers({
    globalReducer,
    ...injectedReducers
  });
}
