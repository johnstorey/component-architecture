// Combine all sagas to a single root saga.
import { fork } from "redux-saga/effects";
import fetchDeployedInstancesSagaWatcher from "./fetchDeployedInstancesSagaWatcher";

// Register all with a single generator.
export default function* startForeman() {
  yield fork(fetchDeployedInstancesSagaWatcher);
}
