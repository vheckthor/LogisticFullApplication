import React, { useState, Children, useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import ErrorIcon from '@material-ui/icons/Error';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import Nav from './Nav';
import '../css/sign_up_new.css';
import LogoSVG from './LogoSVG';

export default function SignUp() {
	let [propValues, setPropValues] = useState({
		password: true,
		phoneNumber: '',
		canvasHeight: '650px',
	});

	const useStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(2),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		pap: {
			border: '2px solid #eaeaea',
			width: '30%',
			height: propValues.canvasHeight,
			marginTop: '2.5%',
			borderRadius: ' 4%',
			backgroundColor: '#fafafa',
		},
		form: {
			width: '100%',
			padding: '3% 0% 0% 0%',
			marginTop: theme.spacing(0),
		},
		heading: {
			fontWeight: 'bold',
			marginBottom: '4%',
		},
		textField: {
			width: '100%',
			marginBottom: '5%',
			border: '2px solid gray',
			borderRadius: '5px',
			padding: '3%',
			'&::placeholder': {
				fontSize: '15px',
			},
			fontSize: '15px',
		},
		passwordField: {
			width: '100%',
			marginBottom: '10%',
			border: '2px solid gray',
			borderRadius: '5px',
			padding: '3%',
			'&::placeholder': {
				fontSize: '15px',
			},
			fontSize: '15px',
		},
		button: {
			width: '100%',
			padding: '3%',
			marginBottom: '3%',
			fontSize: '115%',
			fontWeight: '550',
			position: 'relative',
			backgroundColor: '#FF4874',
			boxShadow:
				'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
			'&:hover': {
				marginBottom: '3%',
				marginTop: '0',
				borderRadius: '5px',
				backgroundColor: '#EF1D52',
				border: 'none',
				boxShadow:
					'0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
			},
			'&:active': {
				backgroundColor: '#D91244',
			},
		},
		last: {
			marginBottom: '15%',
			'&::hover': {
				marginBottom: '15%',
			},
		},
		noTransform: {
			textTransform: 'none',
		},
		text: {
			marginBottom: '3%',
			marginTop: '3%',
			fontSize: '130%',
		},
		twitter: {
			color: '#fff',
			backgroundColor: '#00B6F1',
			'&:hover': {
				color: '#fff',
				backgroundColor: '#1DA1F2',
			},
		},
		google: {
			color: '#DB4437',
			backgroundColor: '#FFF',
			marginBottom: '14%',
			'&:hover': {
				color: '#DB4437',
				backgroundColor: '#FFF',
				marginBottom: '14%',
			},
		},
		facebook: {
			backgroundColor: '#3B5998',
			'&:hover': {
				backgroundColor: '#4267B2',
			},
		},
		logo: {
			border: '2px solid #f50057',
			width: '15%',
			padding: '2%',
			borderRadius: '10px',
			marginLeft: '40%',
		},
		resend: {
			color: '#f50057',
			backgroundColor: '#FFF',
			border: 'none',
			'&:hover': {
				color: '#f50057',
				backgroundColor: '#FFF',
			},
		},
		label: {
			display: 'inline',
			marginBottom: '10%',
		},
		passwordIcon: {
			position: 'absolute',
			top: '5%',
			left: '85%',
			'&:hover': {
				color: 'gray',
				border: 'none',
				transform: 'no-transform',
			},
		},
		emailErrorIcon: {
			position: 'absolute',
			top: '26%',
			left: '90%',
			color: 'red',
		},
		otpErrorIcon: {
			position: 'absolute',
			top: '26%',
			left: '92%',
			color: 'red',
		},
		fullNameErrorIcon: {
			position: 'absolute',
			top: '26%',
			left: '90%',
			color: 'red',
		},
		passwordErrorIcon: {
			position: 'absolute',
			top: '100%',
			left: '2%',
			color: 'red',
		},
	}));
	const classes = useStyles();
	let history = useHistory();

	return (
		<div className='signup-page-background'>
			<div className='signup-page-foreground'>
				<Nav />
				<Container className={classes.pap}>
					<div className={classes.paper}>
						<CssBaseline />
						<FormikStepper
							initialValues={{
								email: '',
								phoneNumber: '',
								otp: '',
								password: '',
								fullName: '',
							}}
							onSubmit={(values, { setSubmitting }) => {
								console.log(JSON.stringify(values));
								setSubmitting(false);
								history.push('/ride');
							}}
							validationSchema={Yup.object({
								email: Yup.string().email().required('Required'),
								phoneNumber: Yup.string()
									.required('required')
									.min(13, 'Must be exactly 13 digits')
									.max(13, 'Must be exactly 13 digits'),
								otp: Yup.string()
									.required('Required')
									.matches(/^[0-9]+$/, 'Must be only digit')
									.min(4, 'Must be exactly 4 digits')
									.max(4, 'Must be exactly 4 digits'),
								fullName: Yup.string().required('Required'),
								password: Yup.string()
									.required('No password provided.')
									.min(8, 'Password is too short - should be 8 chars minimum.')
									.matches(/(?=.*[0-9])/, 'Password must contain a number.'),
							})}
							style={classes}
							setPropValues={setPropValues}
							propValues={propValues}
						>
							<div>
								<Typography
									component='h1'
									variant='h5'
									className={classes.heading}
								>
									Get moving with Transis
								</Typography>
								<label htmlFor='email'>Your Email</label>
								<Field name='email' id='email'>
									{({ field, meta }) => (
										<div style={{ position: 'relative' }}>
											<input
												type='email'
												placeholder='Enter your email'
												className={classes.textField}
												autoFocus
												{...field}
											/>
											{meta.touched && meta.error && (
												<div className={classes.emailErrorIcon}>
													<ErrorIcon />
												</div>
											)}
										</div>
									)}
								</Field>

								<label htmlFor='phone number'>Phone number</label>
							</div>
							<div>
								<div className={classes.logo}>
									<LogoSVG />
								</div>
								<Typography variant='h5' className={classes.text}>
									Enter 4 digit sent to you at <b>+{propValues.phoneNumber}</b>
								</Typography>
								<Field name='otp' id='otp'>
									{({ field, meta }) => (
										<div style={{ position: 'relative' }}>
											<input
												type='text'
												placeholder='0000'
												className={classes.textField}
												autoFocus
												{...field}
											/>
											{meta.touched && meta.error && (
												<div className={classes.otpErrorIcon}>
													<ErrorIcon />
												</div>
											)}
										</div>
									)}
								</Field>
							</div>
							<div>
								<Typography
									component='h1'
									variant='h5'
									className={classes.heading}
								>
									Get Moving With Transis
								</Typography>
								<label htmlFor='fullName'>Full Name</label>
								<Field name='fullName' id='fullName'>
									{({ field, meta }) => (
										<div style={{ position: 'relative' }}>
											<input
												type='text'
												placeholder='Enter Your Full Name'
												className={classes.textField}
												autoFocus
												{...field}
											/>
											{meta.touched && meta.error && (
												<div className={classes.fullNameErrorIcon}>
													<ErrorIcon />
												</div>
											)}
										</div>
									)}
								</Field>

								<label htmlFor='password'>Create Password</label>
								<div style={{ position: 'relative' }}>
									<Field name='password' id='password'>
										{({ field, meta }) => (
											<div
												style={{
													position: 'relative',
												}}
											>
												<input
													type={propValues.password ? 'password' : 'text'}
													placeholder='Enter your password'
													className={classes.passwordField}
													{...field}
												/>
												{meta.touched && meta.error && (
													<div className={classes.passwordErrorIcon}>
														<ErrorIcon /> {meta.error}
													</div>
												)}
											</div>
										)}
									</Field>
									<IconButton
										aria-label='toggle password visibility'
										onClick={() => {
											setPropValues({
												...propValues,
												password: !propValues.password,
											});
										}}
										className={classes.passwordIcon}
									>
										{propValues.password ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</div>
							</div>
						</FormikStepper>
					</div>
				</Container>
			</div>
		</div>
	);
}

export function FormikStepper({
	children,
	style,
	propValues,
	setPropValues,
	...props
}) {
	const childrenArray = Children.toArray(children);
	const [step, setStep] = useState(0);
	const currentChild = childrenArray[step];
	useEffect(() => {
		if (step > 0) {
			setPropValues({ ...propValues, canvasHeight: '380px' });
		}

		if (step === 2) {
			setPropValues({ ...propValues, canvasHeight: '450px' });
		}
	}, [step]);

	return (
		<Formik {...props}>
			{({ errors, values }) => {
				return (
					<Form autoComplete='off' className={style.form}>
						{currentChild}
						{step === 0 ? (
							<div>
								<PhoneInput
									id='phone number'
									name='phoneNumber'
									placeholder='Enter your mobile number'
									value={values.phoneNumber}
									onChange={(e) => {
										values.phoneNumber = e;
										setPropValues({ ...propValues, phoneNumber: e });
									}}
									country='ng'
									containerStyle={{
										width: '100%',
										border: '2px solid gray',
										borderRadius: '5px',
										marginBottom: '5%',
										padding: '2% 2% 2% 0',
										backgroundColor: 'inherit',
									}}
									inputStyle={{
										width: '100%',
										border: '0 solid gray',
										backgroundColor: 'inherit',
									}}
									buttonStyle={{
										border: '0',
										backgroundColor: 'inherit',
									}}
								/>
								<ErrorMessage
									name='phoneNumber'
									component='div'
									style={{ color: 'red' }}
								/>
							</div>
						) : null}
						<Button
							className={`${style.button} ${style.noTransform}`}
							color='secondary'
							variant='contained'
							disableElevation
							type={step === childrenArray.length - 1 ? 'submit' : 'null'}
							onClick={() => {
								if (step === 0 && !errors.email && !errors.phoneNumber) {
									setStep(step + 1);
								} else if (step === 1 && !errors.otp) {
									setStep(step + 1);
								}
							}}
						>
							Next
						</Button>

						{step === 0 ? (
							<div>
								<Typography
									variant='h6'
									display='block'
									align='center'
									gutterBottom
									className={style.text}
								>
									Or sign up using your social media
								</Typography>
								<Button
									className={style.button + ' ' + style.facebook}
									color='primary'
									variant='contained'
									disableElevation
								>
									Facebook
								</Button>
								<Button
									className={`${style.button} ${style.twitter}`}
									variant='contained'
									disableElevation
								>
									Twitter
								</Button>
								<Button
									className={`${style.button} ${style.last} ${style.google}`}
									color='default'
									variant='contained'
									disableElevation
								>
									Google
								</Button>
							</div>
						) : step === 1 ? (
							<Button
								className={`${style.button} ${style.resend} ${style.noTransform}`}
								variant='outlined'
							>
								Resend Code
							</Button>
						) : (
							<div>
								<p className='p'>
									By continuing, I confirm that I have read and agree to the{' '}
									<span>Terms & Conditions</span> and
									<span> Privacy Policy</span>
								</p>
							</div>
						)}
					</Form>
				);
			}}
		</Formik>
	);
}
