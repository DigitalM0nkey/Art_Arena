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
import Typography from '@material-ui/core/Typography';
import RandomImage from "./imageSelector.js"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
}));

export default function CreateStatus() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="status_main_div">
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            You have finished your drawing
          </Typography>
        </Paper>
      </div>
      <div className="gallery">
        <RandomImage x={200} y={200}></RandomImage>
        <RandomImage x={200} y={200}></RandomImage>
      </div>
      <div className="status_main_div">
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Currently waiting for:
          </Typography>
        </Paper>
      </div>
      <div className="player_status_div">
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Player Name
          </Typography>
        </Paper>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Player Name
          </Typography>
        </Paper>
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Player Name
          </Typography>
        </Paper>
      </div>
      <div className="button_div">
        <Link to="/Arena/Vote">
          <Button variant="contained" color="primary">
            Go Vote
          </Button>
        </Link>
      </div>
    </div>
  );
}