import { STATUS_FILTER } from "../constants";

let statusFilterReducer = (state = "NONE", action) => {
  switch (action.type) {
    case STATUS_FILTER:
      return action.payload;
    default:
      return state;
  }
};
export default statusFilterReducer;
