import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PlanetView from "./components/PlanetView";
import ContainerBranchView from "./components/ContainerBranchView";
import AlertBox from "./components/AlertBox";
import GetInstances from "./components/GetInstances";

class App extends Component {
  render() {
    return (
      <span>
        <GetInstances namespace="g1" />
      </span>
    );
  }
}

export default App;
