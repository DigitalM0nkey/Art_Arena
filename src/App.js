import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
// import "../imageSelector.js"
import Header from "./header.js";
import Homepage from "./homepage";
import Arena from "./arena.js";
import Button from "@material-ui/core/Button";

import firebase from "firebase";
import * as firebaseui from "firebaseui";

console.log("FIREBASE =>", firebase);
console.log(process.env);

// <!-- // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSANGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById("firebaseui-auth-container").style.display =
        "none";
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "/Homepage",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: "<your-tos-url>",
  // Privacy policy url.
  privacyPolicyUrl: "<your-privacy-policy-url>"
};

ui.start("#firebaseui-auth-container", uiConfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul> */}
          {/* <hr /> */}
          <Switch>
            <Route exact path="/">
              <div className="App">
                <div className="App-header">
                  <Header />
                  {/* <img src="https://picsum.photos/100" alt="Random" /> */}
                </div>
                <br></br>
                <div class="left"></div>
                <h3>Challenge your friends to an epic battle of art.</h3>
                <p className="App-intro">
                  Each user is presented with the same random image that they
                  all must draw. Once completed all the images will go
                  head-to-head with one champion emerging.
                </p>
                <img
                  id="mainImage"
                  src="https://picsum.photos/300/300"
                  alt="Random"
                />
                <Button
                  size="large"
                  variant="outlined"
                  color="secondary"
                  href="/Arena"
                >
                  go to arena
                </Button>
                <h5>Developers</h5>
                <ul>
                  <li>Terrence Kuiper</li>
                  <li>Justin Stewart</li>
                </ul>
                <div>
                  <div>
                    <div id="firebaseui-auth-container"></div>
                  </div>
                  <br></br>
                  This project is <b>5</b> days old! Be sure to come back
                  tomorrow.
                </div>
              </div>
            </Route>
            <Route path="/Homepage">
              <Homepage></Homepage>
            </Route>
            <Route path="/Arena">
              <Arena></Arena>
            </Route>
            <Route path="/dashboard">{/* <Dashboard /> */}</Route>
          </Switch>
          {/* </div> */}
        </Router>
      </div>
    );
  }
}

export default App;
