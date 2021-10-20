import { CATEGORY_FILTER } from "../constants";

let categoryFilterReducer = (state = "NONE", action) => {
  switch (action.type) {
    case CATEGORY_FILTER:
      return action.payload;
    default:
      return state;
  }
};
export default categoryFilterReducer;
