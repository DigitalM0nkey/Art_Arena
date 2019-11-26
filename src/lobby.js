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

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function CreateLobby() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="arena_name_div">
      <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
            Arena Name
          </Typography>
        </Paper>
      </div>
      <div className="lobby_main_div">
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
        <Link to="/Arena/Drawspace">
          <Button variant="contained" color="primary">
            Draw
          </Button>
        </Link>
      </div>
  </div>
  );
}