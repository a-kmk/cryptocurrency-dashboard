import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class App extends Component {
  render() {
    return <div className="App"> Hello World!</div>;
  }
}

export default App;
