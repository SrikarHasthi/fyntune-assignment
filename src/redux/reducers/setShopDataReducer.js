import { SHOP_DATA } from "../constants";

let initial_state = {
  shop_name: "",
  area: "",
  category: "",
  opening_date: "",
  closing_date: "",
};
let setShopDataReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SHOP_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default setShopDataReducer;