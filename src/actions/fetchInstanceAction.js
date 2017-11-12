import * as constants from "../constants/types";

// Fetch the EC2 instances.
export function fetchInstanceAction() {
  return {
    type: constants.FETCH_INSTANCES
  };
}
