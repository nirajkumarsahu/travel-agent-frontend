import { updateError } from "lib/utils";
import { HEADER_DATA_SUCCESS, HEADER_LOAD_FAILURE } from "./Header.constants";

const updateData = (state, data) => ({
  ...state,
  data
});

export default function(state = {}, action) {
  switch (action.type) {
    case HEADER_DATA_SUCCESS:
      return updateData(state, action.data);
    case HEADER_LOAD_FAILURE:
      return updateError(state, "error Occured in header load");
    default:
      return state;
  }
}
