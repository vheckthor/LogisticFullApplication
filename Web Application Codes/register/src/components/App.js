import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pap: {
    boxShadow:'3px 5px 2px rgba(112, 128, 144, .5)',
    border: '2px solid rgb(236, 203, 203)',
    padding:'0% !mportant',
    width:'30%',
    height:'87vh',
    marginTop:'2.5%',
    borderRadius:' 4%',
  },
  avatar: {
    // margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    padding:'0%',
    marginTop: theme.spacing(0),
    
  },
  agree: {    
    fontSize:'xSmall',

  },
  submit: {
    width:'40%',
    // marginTop: '2%',
    padding:'1%',
    marginBottom:'2%',
    marginLeft:'25%',
    fontSize:'12px',
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <div >
      <Container className={classes.pap}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I Agree to Terms and Conditions."
                className={classes.agree}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}










// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import "./main.css";

// export class App extends Component {
//   render() {
//     return (
     
//   <div id="RegisterDiv">
//   <div id="RegisterHead">Sign Up</div>
//       <form class="needs-validation" novalidate>
//           <div class="form-col">
//             <div>
//               <label for="validationCustom01">First name</label>
//               <input type="text" class="form-control" placeholder="first name" id="validationCustom01" minlength="2" required />
//               <div class="valid-feedback">
//                 Looks good!
//               </div>
//               <div class="invalid-feedback">
//                 Please provide a valid first name.
//               </div>
//             </div>
//             <div>
//               <label for="validationCustom02">Last name</label>
//               <input type="text" class="form-control" placeholder="last name" id="validationCustom02" minlength="2" required />
//               <div class="valid-feedback">
//                 Looks good!
//               </div>
//               <div class="invalid-feedback">
//                 Please provide a valid last name.
//               </div>
//             </div>
//             <div>
//               <label for="validationCustom04">Email</label>
//               <input type="email" class="form-control" placeholder="email" id="validationCustom04" required />
//               <div class="valid-feedback">
//                 Looks good!
//               </div>
//               <div class="invalid-feedback">
//                 Please provide a valid email.
//                 </div>
//               </div>
//           </div>
//           <div class="form-col">
//             <div>
//               <label for="validationCustom03">Password</label>
//               <input type="password" class="form-control" placeholder="choose password" id="validationCustom03" minlength="8" required />
//               <div class="invalid-feedback">
//                 Please provide a valid password.
//               </div>
//                <div class="valid-feedback">
//                  Looks good!
//               </div>
//             </div>
//             <div>
//               <label for="validationCustom05">Confirm Password</label>
//               <input type="password" class="form-control" placeholder="confirm password" id="validationCustom05" minlength="8" required />
//               <div class="invalid-feedback">
//                 Please provide a valid password.
//               </div>
//                <div class="valid-feedback">
//                  Looks good!
//               </div>
//             </div>
//           </div>
//               <div class="form-group">
//                   <div class="form-check">
//                     <p id="check">
//                           <input type="checkbox" value="" id="invalidCheck" name="agree"class="form-check-input" required />
//                       <label class="form-check-label" for="invalidCheck">I agree to terms and conditions</label>
//                     </p>
//                       <div class="invalid-feedback">
//                         You must agree before submitting.
//                       </div>
//                   </div>
//               </div>
//               <div id="socialLinks" class="d-flex flex-row justify-content-around">
//                 <a href="http://www.facebook.com"><i class="fa fa-facebook-official" aria-hidden="true"></i>acebook</a>
//                 <a href="http://www.gmail.com"><i class="fa fa-google" aria-hidden="true"></i>oogle</a>
//               </div>
//           <button class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop" type="submit" >Sign Up</button>
//         </form>
//         </div>
    
//     );
//   }
// }

// export default App;
