import { CATEGORY_SELECTED } from "../constants";

let categoryActionReducer = (state = "None", action) => {
  switch (action.type) {
    case CATEGORY_SELECTED:
      return action.payload;
    default:
      return state;
  }
};
export default categoryActionReducer;
