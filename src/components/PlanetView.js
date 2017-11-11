// Container / View Pattern.
// http://lucasmreis.github.io/blog/simple-react-patterns/
import React, { Component } from 'react';

class PlanetView extends React.Component {
  renderLoading() {
    return <div>Loading...</div>;
  }

  renderError() {
    return <div>I'm sorry! Please try again.</div>;
  }

  renderPlanet() {
    const { name, climate, terrain } = this.props.planet;
    return (
      <div>
      <h2>{name}</h2>
      <div>Climate: {climate}</div>
      <div>Terrain: {terrain}</div>
      </div>
    );
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.planet) {
      return this.renderPlanet();
    } else {
      return this.renderError();
    }
  }
}

// State:
// { Loading: true }
// { Loading: false, planet: { name, climate, terrain }}
// { Loading: false, error: any}

class DagobahContainer extends React.Component {
  state = { loading: true };

  componentDidMount() {
    fetch("https://swapi.co/api/planets/5/")
    .then(res => res.json() )
    .then(
      planet => this.setState({ loading: false, planet: planet }),
      error => this.setState({ loading: false, error: error })
  );
}

  render() {
    return <PlanetView {...this.state} />;
  }

}

export default DagobahContainer;