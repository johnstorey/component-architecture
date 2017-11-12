/*
 * Sample of creating a view per component
 * state in a nice, testable way.
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInstanceAction } from "../actions/fetchInstanceAction";
import { sleep } from "../libs/helpers";

// Make a view per state.
const LoadingView = () => <div>Loading ...</div>;
const ErrorView = () => <div>Error</div>;
const InstancesView = instances => {
  return (
    <ul>
      {instances.instances.map(instance => {
        return <li>{instance.instanceId}</li>;
      })}
    </ul>
  );
};

// Determine which view to return based on the state.
const DisplayByState = ({ loading, instances }) => {
  if (loading) {
    return <LoadingView />;
  } else if (instances) {
    return <InstancesView {...{ instances }} />;
  } else {
    return <ErrorView />;
  }
};

// Main container code. Works with redux to change
// redux state, and changes the view shown based off
// that state.
class GetInstancesContainer extends Component {
  async componentDidMount() {
    await sleep(3000);
    this.props.dispatch(fetchInstanceAction());
  }

  render() {
    return <DisplayByState {...this.props} namespace={this.props.namespace} />;
  }
}

// Finally standard redux patterns.
const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps state", state);
  return {
    loading: state.instancesFetchedReducer.loading,
    instances: state.instancesFetchedReducer.instances,
    error: state.instancesFetchedReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  };
};

const GetInstancesConnected = connect(mapStateToProps, mapDispatchToProps)(
  GetInstancesContainer
);
export default GetInstancesConnected;
