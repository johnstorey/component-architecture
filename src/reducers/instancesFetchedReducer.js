import * as types from "../constants/types";
import initialState from "./initialState";

export default function(state = initialState.instancesFetchedReducer, action) {
  switch (action.type) {
    case types.NEW_INSTANCES:
      const newState = Object.assign({}, state, {
        loading: false,
        instances: action.value
      });
      return newState;

    default:
      return state;
  }
}
