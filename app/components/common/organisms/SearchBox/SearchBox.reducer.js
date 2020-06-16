import { updateError } from "lib/utils";
import {
  SEARCH_LOAD_SUCCESS,
  SEARCH_LOAD_FAILURE
} from "./SearchBox.constants";

const updateData = (state, data) => ({
  ...state,
  searchData: data
});

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH_LOAD_SUCCESS:
      return updateData(state, action.data);
    case SEARCH_LOAD_FAILURE:
      return updateError(state, "error Occured in Search load");
    default:
      return state;
  }
}
