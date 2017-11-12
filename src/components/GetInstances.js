import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInstanceAction } from "../actions/fetchInstanceAction";
import { sleep } from "../libs/helpers";

// A View per state.
const LoadingView = () => <div>Loading ...</div>;
const ErrorView = () => <div>Error</div>;
const InstancesView = instances => {
  console.log("instances view instances", instances);
  return (
    <ul>
      {instances.instances.map(instance => {
        return <li>{instance.instanceId}</li>;
      })}
    </ul>
  );
};

const DisplayByState = ({ loading, instances }) => {
  console.log("loading", loading);
  console.log("instances", instances);
  if (loading) {
    return <LoadingView />;
  } else if (instances) {
    console.log("DisplayByState instances", instances);
    return <InstancesView {...{ instances }} />;
  } else {
    return <ErrorView />;
  }
};

// State:
// { Loading: true }
// { Loading: false, instances: [ { instanceId: '1' }, ... ]}
// { Loading: false, error: any }

class GetInstancesContainer extends Component {
  async componentDidMount() {
    await sleep(3000);
    this.props.dispatch(fetchInstanceAction());
  }

  render() {
    console.log("GetInstances render state", this.state);
    console.log("GetInstances render props", this.props);
    return <DisplayByState {...this.props} namespace={this.props.namespace} />;
  }
}

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
