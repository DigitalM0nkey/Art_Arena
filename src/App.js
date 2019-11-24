import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://picsum.photos/100" alt="Random" />
          <h2>Welcome to Art Arena</h2>
        </div>
        <h3>Challenge your friends to an epic battle of art.</h3>
        <p className="App-intro">
          Each user is presented with the same random image that they all must
          draw. Once completed all the images will go head-to-head with one
          champion emerging.
        </p>
        <img src="https://picsum.photos/300/300" alt="Random" />
        <h5>Developers</h5>
        <ul>
          <li>Terrence Kuiper</li>

          <li>Justin Stewart</li>
        </ul>
      </div>
    );
  }
}

export default App;
