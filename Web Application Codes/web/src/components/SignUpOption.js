import React from 'react';
import { Card, CardContent, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Nav from './Nav';
import RafkiSVG from './RafkiSVG';
import '../css/sign_up_option.css';

function SignUpOption() {
	const useStyles = makeStyles((theme) => ({
		container: {
			marginTop: '10%',
		},
		cardContainer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		card: {
			border: '1px solid #ef1d52',
			borderRadius: '10px',
			boxShadow: '0',
		},
		firstCard: {
			marginRight: '5%',
		},
		anchor: {
			color: 'black',
		},
	}));
	const classes = useStyles();

	return (
		<div className='wrapper'>
			<Nav />
			<Container className={classes.container}>
				<div className={classes.cardContainer}>
					<Card className={`${classes.card} ${classes.firstCard}`}>
						<CardContent>
							<Link to='/sign_up/driver' className={classes.anchor}>
								<div>
									<RafkiSVG />
								</div>
								<Typography component='h1'>
									Sign Up to drive & deliver
								</Typography>
							</Link>
						</CardContent>
					</Card>

					<Card className={classes.card}>
						<CardContent>
							<Link to='/sign_up/rider' className={classes.anchor}>
								<div>
									<RafkiSVG />
								</div>
								<Typography component='h1'>Sign Up for rides</Typography>
							</Link>
						</CardContent>
					</Card>
				</div>
			</Container>
		</div>
	);
}

export default SignUpOption;
