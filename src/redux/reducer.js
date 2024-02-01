import { combineReducers } from "redux";
import { advertsReducer } from "./slice/adverts-slice";

const rootReducer = combineReducers({
  adverts: advertsReducer,
  // filter
});

export default rootReducer;
