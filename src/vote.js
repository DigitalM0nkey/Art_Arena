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

export default function CreateVote() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="vote_message">
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Which do you like more, Left? or Right?
          </Typography>
        </Paper>
      </div>
      <div className="gallery">
        <div className="option_one">
        <Button variant="contained" color="primary">
          Vote
        </Button>
        <RandomImage x={200} y={200}></RandomImage>
        </div>
        <div>
          <RandomImage x={200} y={200}></RandomImage>
        </div>
        <div className="option_two">
        <Button variant="contained" color="primary">
          Vote
        </Button>
        <RandomImage x={200} y={200}></RandomImage>
        </div>
      </div>
      <div className="button_div">
        <Link to="/Arena/Winner">
          <Button variant="contained" color="primary">
            View Winner
          </Button>
        </Link>
      </div>
    </div>
  );
}