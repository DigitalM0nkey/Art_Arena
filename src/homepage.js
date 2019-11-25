import React, { Component } from "react";
import "./hompage.scss";
import Header from "./header.js"

class homepage extends Component {
  render() {
    return (
      <div className="homepage">
        {/* Header */}
        <Header className="header"></Header>
        <div className="homepage-header">
          <i class="homepage-logo logo fad fa-paint-brush"></i>
          <div class="left"></div>
          <h2>Welcome to Art Arena</h2>
        </div>
        {/* Header End */}
        <br></br>
        <div class="canvas">CANVAS</div>
        <div class="searchbar">SEARCHBAR</div>
        <div class="room">ROOM</div>
        <div class="room">ROOM</div>
        <div class="room">ROOM</div>
        <div class="room">ROOM</div>
      </div>
    );
  }
}

export default homepage;
