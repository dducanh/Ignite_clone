import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
  gameReducer: gameReducer,
  detailReducer: detailReducer,
});

export default rootReducer;
