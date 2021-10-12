import React from 'react';
import {Link } from 'react-router-dom'
import { Card, CardContent, Container, Typography } from '@material-ui/core';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutline';

import LogoSVG from './LogoSVG';
import RafkiSVG from './rafki.svg';
import RafikiSVG from './rafiki.svg';
import '../css/sign_up_option.css';

function SignUpOption() {
	return (
		<div className="wrapper">
			<nav id='home-nav'>
				<div className='topLogo'>
					<LogoSVG />
					<h3 className='topHeader'>TRANSIS</h3>
				</div>
				<ul id='signup-top-list'>
					<li id='signup-top-list-element-1'>
						<Link to='/'>Home</Link>
					</li>
					<li id='signup-top-list-element-2'>
						<Link to='/ride'>Ride</Link>
					</li>
					<li id='signup-top-list-element-3'>
						<Link to='/drive'>Drive</Link>
					</li>
					<li id='signup-top-list-element-4'>
						<Link to='/logistics'>Logistics</Link>
					</li>
				</ul>
				<div className='action-buttons'>
					<button>
						<Link to='/login'  id='login'>Log In</Link>
					</button>
					<button>
						<PersonOutlinedIcon />
						<Link to='/sign_up'>Sign Up</Link>
					</button>
				</div>
			</nav>
			<Container className="container">
				<div className="cardContainer">
					<Card>
						<CardContent>
							<div>
								<img src={RafkiSVG} alt=''/>
							</div>
							<Typography component='h2'>Sign Up to drive & deliver</Typography>
						</CardContent>
					</Card>

					<Card>
						<CardContent>
							<div>
								<img src={RafikiSVG} alt=''/>
							</div>
							<Typography component='h2'>Sign Up for rides</Typography>
						</CardContent>
					</Card>
				</div>
			</Container>
		</div>
	);
}

export default SignUpOption;
