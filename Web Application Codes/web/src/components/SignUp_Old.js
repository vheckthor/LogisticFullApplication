import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../css/main.css';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Link from '@material-ui/core/Link';
import Nav from './Nav'
// import { Link } from 'react-router-dom';
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
		marginTop: '5%',
		padding: '% !mportant',
		backgroundColor: '#fff',
		width: '30%',
		borderRadius: ' 4%',
	},
	avatar: {
		// margin: theme.spacing(0),
		marginLeft: '45%',
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		padding: '0%',
		marginTop: theme.spacing(0),
	},
	agree: {
		fontSize: '11px',
		display: 'inlineFlex',
		fontWeight: '100',
	},
	checkbox: {
		display: 'inline',
		width:'7%',
		margin:"0%",
	},
	label: {
		display: 'inline',
		marginBottom:"10%",
	},
	submit: {
		width: '100%',
		padding: '3%',
		marginTop:'2%',
		fontSize: '12px',
		borderRadius: '5px',
	},
}));

export default function SignUp2() {
	const classes = useStyles();
	return (
		<Formik
			initialValues={{ LastName: '', FullName: '', email: '', password: '' }}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					console.log('Logging in', values);
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
				FullName: Yup.string()
					// .FullName()
					.required('Required'),
				LastName: Yup.string()
					// .LastName()
					.required('Required'),
				email: Yup.string().email().required('Required'),
				password: Yup.string()
					.required('No password provided.')
					.min(8, 'Password is too short - should be 8 chars minimum.')
					.matches(/(?=.*[0-9])/, 'Password must contain a number.'),
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
					<div className='bodDiv'>
						<Nav />
						<Container className={classes.pap}>
							<div className={classes.paper}>
								<CssBaseline />
								<form onSubmit={handleSubmit} className={classes.form}>
									<Typography component='h1' variant='h5'>
										Get Moving With Transis
									</Typography>
									<label htmlFor='FullName'>Full Name</label>
									<input
										name='FullName'
										type='text'
										placeholder='Enter Your Full Name'
										value={values.FullName}
										onChange={handleChange}
										onBlur={handleBlur}
										className={errors.FullName && touched.email && 'error'}
									/>
									{errors.FullName && touched.email && (
										<div className='input-feedback'>{errors.email}</div>
									)}
									<label htmlFor='email'>Create Password</label>
									<input
										name='password'
										type='password'
										placeholder='Enter your password'
										value={values.password}
										onChange={handleChange}
										onBlur={handleBlur}
										id="myInput"
										className={errors.password && touched.password && 'error'}
									/>
									{errors.password && touched.password && (
										<div className='input-feedback'>{errors.password}</div>
									)}
									<input
										name='showPass'
										id="showPass"
										type='checkbox'
										className={classes.checkbox}
										onClick={ () =>{
												var x = document.getElementById("myInput");
													if (x.type === "password") {
														x.type = "text";
													} else {
														x.type = "password";
													}
												}
										}
									/>
									<label htmlFor='showPass' className={classes.label}>Show Password</label>
									{/* <Link to='/ride2' > */}
										<button
											type='submit'
											className={classes.submit}
											variant='contained'
											disabled={isSubmitting}
										>
											Next
										</button>
									{/* </Link> */}
									<p className='p'>
										By continuing, I confirm that I have read and
										agree to the <span>Terms & Conditions</span> and
										<span> Privacy Policy</span>
									</p>
								</form>
							</div>
						</Container>
					</div>
				);
			}}
		</Formik>
	);
}
