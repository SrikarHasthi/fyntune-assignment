import { combineReducers } from "redux";
import areaFilterReducer from "./areaFilterReducer";
import categoryFilterReducer from "./categoryFilterReducer";
import statusFilterReducer from "./statusFilterReducer";
import setShopDataReducer from "./setShopDataReducer";
import shopDataArrayReducer from "./shopDataArrayReducer";

let rootReducer = combineReducers({
  shopData: setShopDataReducer,
  shopDataArray: shopDataArrayReducer,
  areaFilter: areaFilterReducer,
  categoryFilter:categoryFilterReducer,
  statusFilter:statusFilterReducer,
});
export default rootReducer;