// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// // import {
// //   BrowserRouter as Router,
// //   Switch,
// //   Route,
// //   Link
// // } from "react-router-dom";
// import Button from '@material-ui/core/Button';
// import Header from "./header.js"
// import Typography from '@material-ui/core/Typography';
// import RandomImage from "./imageSelector.js"
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import Select from '@material-ui/core/Select';
// import TextField from '@material-ui/core/TextField';
// import Switch from '@material-ui/core/Switch';

// export default function SwitchLabels() {
//   const [state, setState] = React.useState({
//     checkedA: true,
//     checkedB: true,
//   });

//   const handleSwap = name => event => {
//     setState({ ...state, [name]: event.target.checked });
//   };

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function CreateRoom() {
//   const classes = useStyles();
//   const [age, setAge] = React.useState('');

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);

//   const handleChange = event => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <Grid
//         container
//         direction="column"
//         justify="center"
//         alignItems="center"
//       >
//         <form className={classes.root} noValidate autoComplete="off">
//           <TextField id="outlined-basic" label="Room Name" variant="outlined" />
//         </form>
//         <FormControl variant="outlined" className={classes.formControl}>
//           <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
//             players
//           </InputLabel>
//           <Select
//             labelId="demo-simple-select-outlined-label"
//             id="demo-simple-select-outlined"
//             value={age}
//             onChange={handleChange}
//             labelWidth={labelWidth}
//           >
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={3}>Three</MenuItem>
//             <MenuItem value={4}>Four</MenuItem>
//             <MenuItem value={6}>Six</MenuItem>
//           </Select>
//         </FormControl>

//         <FormGroup row>
//           <FormControlLabel
//             control={
//               <Switch checked={state.checkedA} onChange={handleSwap('checkedA')} value="checkedA" />
//             }
//             label="Secondary"
//           />
//           <FormControlLabel
//             control={
//               <Switch
//                 checked={state.checkedB}
//                 onChange={handleSwap('checkedB')}
//                 value="checkedB"
//                 color="primary"
//               />
//             }
//             label="Primary"
//           />
//         </FormGroup>

//         <Button size="large" variant="outlined" color="secondary" href="/Arena/Lobby">
//           Create Arena
//         </Button>
//       </Grid>
//     </div>
//   );
// }