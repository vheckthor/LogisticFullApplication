import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Nav from './Nav';
import '../css/welcome.css';
import LogoSVG from './LogoSVG';

function Welcome() {
	return (
		<div className='signup-page-background'>
			<div className='signup-page-foreground'>
				<Nav className='topNav' />
				<div className='welcome'>
					<div className='welcomeLogo'>
						<LogoSVG />
					</div>
					<h4 className='welcomeWord'>WELCOME TO TRANSIS RIDES</h4>
					<Link to='/order'>Order My Ride</Link>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
