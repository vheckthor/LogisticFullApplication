import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css'
import LogoSVG from './LogoSVG';

export default function Nav() {
	return (
		<div>
			<nav id='top-nav'>
				<div className='topLogo' >
					<LogoSVG />
					<h3 className='topHeader'>TRANSIS</h3>
				</div>
				<ul id='signup-top-list'>
					<li id="signup-top-list-element-1">
						<Link to='/'>Home</Link>
					</li>
					<li id="signup-top-list-element-1">
						<Link to='/ride'>Ride</Link>
					</li>
					<li id="signup-top-list-element-2">
						<Link to='/drive'>Drive</Link>
					</li>
					<li id="signup-top-list-element-3">
						<Link to='/logistics'>Logistics</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
