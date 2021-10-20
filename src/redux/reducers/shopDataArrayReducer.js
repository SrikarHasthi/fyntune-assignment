import { SHOP_DATA_ARRAY, SHOP_DATA_ARRAY_DELETE } from "../constants";

let initial_array = [];
let shopDataArrayReducer = (state = initial_array, action) => {
  switch (action.type) {
    case SHOP_DATA_ARRAY:
      initial_array.push(action.payload);
      return initial_array;
    case SHOP_DATA_ARRAY_DELETE:
      const newarray = [...action.payload];
      initial_array=newarray
      return initial_array;
    default:
      return state;
  }
};
export default shopDataArrayReducer;
