import {
  AREA_FILTER,
  AREA_SELECTED,
  CATEGORY_FILTER,
  CATEGORY_SELECTED,
  RESET_DATA,
  SHOP_DATA,
  SHOP_DATA_ARRAY,
  SHOP_DATA_ARRAY_DELETE,
  STATUS_FILTER,
} from "./constants";

export const areaaction = (value) => {
  return {
    type: AREA_SELECTED,
    payload: value,
  };
};
export const categoryaction = (value) => {
  return {
    type: CATEGORY_SELECTED,
    payload: value,
  };
};
export const setshopdata = (obj) => {
  return {
    type: SHOP_DATA,
    payload: obj,
  };
};
export const shopdataarray = (obj) => {
  return {
    type: SHOP_DATA_ARRAY,
    payload: obj,
  };
};
export const shopdataarraydelete = (obj) => {
  return {
    type: SHOP_DATA_ARRAY_DELETE,
    payload: obj,
  };
};

export const areafilter = (value) => {
  return {
    type: AREA_FILTER,
    payload: value,
  };
};
export const categoryfilter = (value) => {
  return {
    type: CATEGORY_FILTER,
    payload: value,
  };
};
export const statusfilter = (value) => {
  return {
    type: STATUS_FILTER,
    payload: value,
  };
};
export const resetdata = () => {
  return {
    type: RESET_DATA,
  };
};
