import React from 'react';
import '../css/footer.css'
import LogoSVG from './LogoSVG';

export default function Footer() {
	return (
		<div className='footer'>
			<div className='footerLogo'>
				<LogoSVG />
				<h3 className='footerText'>TRANSIS</h3>
			</div>
		</div>
	);
}
