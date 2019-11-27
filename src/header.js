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
import "./App.scss";


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

export default function CreateHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root} app- header>
      <Grid 
        container direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={3}>
          <Link to="/Homepage">
            <Paper className={classes.paper}>
              <i className="App-logo logo fad fa-paint-brush"></i>
              Art Arena
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Room Name</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Time Left: 2 min</Paper>
        </Grid>
        <Grid item xs={2}>
        <Button size="large" variant="outlined" color="secondary" href="/">
          Leave Game
        </Button>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>Sign In</Paper>
        </Grid>
      </Grid>
    </div>
  );
}