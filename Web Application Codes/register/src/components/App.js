import React from "react";
import { Formik } from "formik";
import "./main.css"
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
const App = () => (
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
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="FirsFirstName">First Name</label>
          <input
            name="FirstName"
            type="text"
            placeholder="Enter your FirstName"
            value={values.FirstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.FirstName && touched.FirstName && "error"}
          />
          {errors.FirstName && touched.email && (
            <div className="input-feedback">{errors.FirstName}</div>
          )}
          <label htmlFor="LastName">Last Name</label>
          <input
            name="LastName"
            type="text"
            placeholder="Enter your email"
            value={values.LastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.LastName && touched.LastName && "error"}
          />
          {errors.LastName && touched.LastName && (
            <div className="input-feedback">{errors.LastName}</div>
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
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>
);

export default App;
