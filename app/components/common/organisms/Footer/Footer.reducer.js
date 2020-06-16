import { updateError } from "lib/utils";
import { FOOTER_DATA_SUCCESS, FOOTER_LOAD_FAILURE } from "./Footer.constants";

const updateData = (state, data) => ({
  ...state,
  data
});

export default function(state = {}, action) {
  switch (action.type) {
    case FOOTER_DATA_SUCCESS:
      return updateData(state, action.data);
    case FOOTER_LOAD_FAILURE:
      return updateError(state, "error Occured in FOOTER load");
    default:
      return state;
  }
}
