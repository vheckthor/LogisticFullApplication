import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Formik } from "formik";
import * as Yup from "yup";
import "./main.css";
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';


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
    return(
      <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }}
      //********Handling validation messages yourself*******/
      // validate={values => {
      //   let errors = {};
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (!EmailValidator.validate(values.email)) {
      //     errors.email = "Invalid email address";
      //   }
  
      //   const passwordRegex = /(?=.*[0-9])/;
      //   if (!values.password) {
      //     errors.password = "Required";
      //   } else if (values.password.length < 8) {
      //     errors.password = "Password must be 8 characters long.";
      //   } else if (!passwordRegex.test(values.password)) {
      //     errors.password = "Invalida password. Must contain one number";
      //   }
  
      //   return errors;
      // }}
      //********Using Yum for validation********/
  
      validationSchema={Yup.object().shape({
        FirstName: Yup.string()
          // .FirstName()
          .required("Required"),
        LastName: Yup.string()
          // .LastName()
          .required("Required"),
        email: Yup.string().email().required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
  
        return (
          <form onSubmit={handleSubmit} className={classes.form}>
            <Avatar className={classes.avatar}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <label htmlFor="FirstName">First Name</label>
            <input
              name="FirstName"
              type="text"
              placeholder="Enter your FirstName"
              value={values.FirstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.FirstName && touched.email && "error"}
              />
              {errors.FirstName && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            <label htmlFor="LastName">Last Name</label>
            <input
              name="LastName"
              type="text"
              placeholder="Enter your LastName"
              value={values.LastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.LastName && touched.email && "error"}
              />
              {errors.LastName && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label htmlFor="email">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I Agree to Terms and Conditions."
              className={classes.agree}
            />
            <button type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </form>
        );
      }}
    </Formik>
  
    )
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
