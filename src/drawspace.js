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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CreateDrawspace() {
  const classes = useStyles();

  return (
    <div>
      <Header></Header>
      <div>
        <RandomImage
          y={500}
          x={500}
        ></RandomImage>
      </div>
      <div id="paint-app">
        <footer>
          <Link to="/Arena/Status">
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Link>
        </footer>
      </div>
    </div>
  );
}