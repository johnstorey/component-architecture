import * as constants from "../constants/types";

// EC2 instances fetched.
export function instancesFetchedAction(instances) {
  return {
    type: constants.NEW_INSTANCES,
    value: instances
  };
}
