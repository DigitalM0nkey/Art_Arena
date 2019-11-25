import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <i class="App-logo logo fad fa-paint-brush"></i>
          <div class="left"></div>
          {/* <img src="https://picsum.photos/100" alt="Random" /> */}
          <h2>Welcome to Art Arena</h2>
        </div>
        <br></br>
        <h3>Challenge your friends to an epic battle of art.</h3>
        <p className="App-intro">
          Each user is presented with the same random image that they all must
          draw. Once completed all the images will go head-to-head with one
          champion emerging.
        </p>
        <img id="mainImage" src="https://picsum.photos/300/300" alt="Random" />
        <h5>Developers</h5>
        <ul>
          <li>Terrence Kuiper</li>

          <li>Justin Stewart</li>
        </ul>
        <div>
          <br></br>
          This project is <b>5</b> days old! Be sure to come back tomorrow.
        </div>
      </div>
    );
  }
}

export default App;
