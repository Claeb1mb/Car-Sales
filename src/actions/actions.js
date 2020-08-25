import { ADD_FEATURE } from "../reducers/reducer";
import { REMOVE_FEATURE } from "../reducers/reducer";

export const removeFeature = (feature) => {
  // dispatch an action here to remove an item
  console.log("Dispatching Remove_Feature action");
  return { type: REMOVE_FEATURE, payload: feature };
};

export const addFeature = (feature) => {
  //dispatch an action here to add an item
  console.log("Dispatching ADD_Feature action");
  return { type: ADD_FEATURE, payload: feature };
};
