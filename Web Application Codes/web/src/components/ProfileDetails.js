import React, { useState } from 'react';
import {
	Container,
	makeStyles,
	Typography,
	CssBaseline,
	Button,
} from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import Nav from './Nav';
import '../css/profileDetails.css';

function ProfileDetails() {
	let [propValues, setPropValues] = useState({
		password: true,
	});

	const useStyle = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(2),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		pap: {
			border: '2px solid #eaeaea',
			width: '30%',
			height: '450px',
			marginTop: '2.5%',
			borderRadius: ' 4%',
			backgroundColor: '#fafafa',
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
		form: {
			width: '100%',
			padding: '3% 0% 0% 0%',
			marginTop: theme.spacing(0),
		},
		fullNameErrorIcon: {
			position: 'absolute',
			top: '26%',
			left: '90%',
			color: 'red',
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
		passwordErrorIcon: {
			position: 'absolute',
			top: '100%',
			left: '2%',
			color: 'red',
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
		button: {
			width: '100%',
			padding: '3%',
			marginBottom: '3%',
			fontSize: '115%',
			fontWeight: '550',
			position: 'relative',
			backgroundColor: '#ef1d52',
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
		noTransform: {
			textTransform: 'none',
		},
        p: {
            marginTop: '2%'
        },
        span: {
            color: '#ef1d52'
        }
	}));

	const classes = useStyle();
	return (
		<div className='profile-page-background'>
			<div className='profile-page-foreground'>
				<Nav />
				<Container className={classes.pap}>
					<div className={classes.paper}>
						<CssBaseline />
						<Formik
							initialValues={{
								fullName: '',
								password: '',
							}}
							onSubmit={(values) => {
								console.log(JSON.stringify(values, null, 2));
							}}
							validationSchema={Yup.object({
								fullName: Yup.string().required('Required'),
								password: Yup.string()
									.required('No password provided.')
									.min(8, 'Password is too short - should be 8 chars minimum.')
									.matches(/(?=.*[0-9])/, 'Password must contain a number.'),
							})}
						>
							<Form autoComplete='off' className={classes.form}>
								<div>
									<Typography
										component='h1'
										variant='h5'
										className={classes.heading}
									>
										Get moving with Transis
									</Typography>
									<label htmlFor='fullName'>Full Name</label>
									<Field name='fullName' id='fullName'>
										{({ field, meta }) => (
											<div style={{ position: 'relative' }}>
												<input
													type='text'
													placeholder='Enter full name'
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
								<Button
									className={`${classes.button} ${classes.noTransform}`}
									color='secondary'
									variant='contained'
									disableElevation
									type='submit'
								>
									Next
								</Button>
							</Form>
						</Formik>

						<div>
							<p className={classes.p}>
								By continuing, I confirm that I have read and agree to the{' '}
								<span className={classes.span}>Terms & Conditions</span> and
								<span className={classes.span}> Privacy Policy</span>
							</p>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default ProfileDetails;
