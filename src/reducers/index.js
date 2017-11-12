import { combineReducers } from "redux";
import instancesFetchedReducer from "./instancesFetchedReducer";

// Combine all reducers into a single reducer function.
const rootReducer = combineReducers({
  instancesFetchedReducer: instancesFetchedReducer
});

export default rootReducer;
