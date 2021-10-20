import { AREA_SELECTED } from "../constants";

let areaActionReducer = (state = "None", action) => {
  switch (action.type) {
    case AREA_SELECTED:
      return action.payload;
    default:
      return state;
  }
};
export default areaActionReducer;