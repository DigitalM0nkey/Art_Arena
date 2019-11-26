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

export default function CreateStatus() {
  const classes = useStyles();

  return (
    <div>
      <Header></Header>
      <Grid
        container direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={4}
      >
      <div>
      <Link to="/Arena/Vote">
          <Button variant="contained" color="primary">
            Go Vote
          </Button>
        </Link>
      </div>
    </Grid>
    </div>
  );
}