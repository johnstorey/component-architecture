import React, { Component } from "react";

// A View per state.
const LoadingView = () => <div>Loading ...</div>;
const ErrorView = () => <div>Error</div>;
const InstancesView = instances => {
  console.log("instances view instances", instances);
  return (
    <ul>
      <li>a-1</li>
      <li>b-2</li>
    </ul>
  );
};

const DisplayByState = ({ loading, instances }) => {
  if (loading) {
    return <LoadingView />;
  } else if (instances) {
    return <InstancesView {...instances} />;
  } else {
    return <ErrorView />;
  }
};

// State:
// { Loading: true }
// { Loading: false, instances: [ { instanceId: '1' }, ... ]}
// { Loading: false, error: any }

class GetInstancesContainer extends Component {
  state = { loading: true };

  componentDidMount() {
    this.setState({
      loading: false,
      instances: [{ instanceId: "a-1" }, { instanceId: "a-2" }]
    });
  }

  render() {
    return <DisplayByState {...this.state} />;
  }
}

export default GetInstancesContainer;
