// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import Main from "./components/Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    const apiUrl = "https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }
  render() {
    return (
      <div className="App">
        <h1>SportzInteractive</h1>
        <hr />
        <Main details={this.state.data} />
      </div>
    );
  }
}

export default App;
