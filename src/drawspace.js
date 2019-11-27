import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Header from "./header.js"
import RandomImage from "./imageSelector.js"
import ReactSketchCanvas from 'react-sketch-canvas';
import {SketchField, Tools} from 'react-sketch';
 

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

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem'
};

const submitImage = {
}

export default function CreateDrawspace() {
  const classes = useStyles();

  return (
    <div>
      <Header></Header>
      <div className="draw_main_div">
        <div>
          <RandomImage
            y={180}
            x={320}
          ></RandomImage>
        </div>
        <div id="paint-app">
          <div className="canvas">
            <SketchField 
              width='640px' 
              height='360px' 
              tool={Tools.Pencil} 
              lineColor='black'
              lineWidth={3}
              backgroundColor="white"
            />
          </div>
          <footer>
            <Link to="/Arena/Status">
              <Button variant="contained" color="primary" onClick={submitImage}>
                Submit
              </Button>
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}