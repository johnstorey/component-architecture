import React from 'react';

// Create a view per state.
const LoadingView = () => <div>Loading...</div>;

const ErrorView = () => <div>I'm sorry! Please try again.</div>;

const PlanetView = ({ name, climate, terrain }) => (
  <div>
  <h2>{name}</h2>
  <div>Climate: {climate}</div>
  <div>Terrain: {terrain}</div>
  </div>
);

const PlanetBranch = ({ loading, planet }) => {
  if (loading) {
    return <LoadingView />;
  } else if (planet) {
    return <PlanetView {...planet} />;
  } else {
    return <ErrorView />;
  }
};

// State:
// { Loading: true }
// { Loading: false, planet: { name, climate, terrain }}
// { Loading: false, error: any }

class ContainerBranchView extends React.Component {
  state = { loading: true };

  async componentDidMount() {
    fetch("https://swapi.co/api/planets/3/")
    .then(res => res.json() )
    .then(
      planet => this.setState({ loading: false, planet: planet }),
      error => this.setState({ loading: false, error: error })
    );
  }

  render() {
    return (
      <span>
      <h1>Container / Branch View </h1>
      <PlanetBranch {...this.state} />;
      </span>
    );
  }
}

export default ContainerBranchView;