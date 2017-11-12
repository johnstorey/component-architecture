import { takeLatest } from "redux-saga/effects";
import { fetchDeployedInstancesSaga } from "./fetchDeployedInstancesSaga";
import * as types from "../constants/types";

export default function* fetchDeployedInstancesSagaWatcher() {
  yield takeLatest(types.FETCH_INSTANCES, fetchDeployedInstancesSaga);
}
