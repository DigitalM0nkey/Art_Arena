// Get a random image from picsum between 1 & 1048. Both fields are optional, if only lengh is given you will receive a square photo, if no paramerts are passed it will use the default vale and return a square photo.

// Example of result:
// https://picsum.photos/id/1/1000/1000

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Header from "./header.js"
import RandomImage from "./imageSelector.js"

export default function randomImage(props) {

  const defaultSize = 350;
  const randomNumber = Math.floor(Math.random() * 1048);
  if (!props.x) {
    props.x = defaultSize;
  }
  if (!props.y) {
    props.y = props.x;
  }
  return (<img src={`https://picsum.photos/id/${randomNumber}/${props.x}/${props.y}`}></img>);
};