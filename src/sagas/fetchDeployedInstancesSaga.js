import { put } from "redux-saga/effects";
import * as types from "../constants/types";
import { instancesFetchedAction } from "../actions/instancesFetchedAction";

export function* fetchDeployedInstancesSaga(action) {
  yield put(
    instancesFetchedAction([
      { key: 1, instanceId: "a1" },
      { key: 2, instanceId: "b2" },
      { key: 3, instanceId: "c3" }
    ])
  );
}
