import React from 'react';

export default function Home() {
	return (
		<div>
			<div className='bodyText'>
				<h1>
					Swift, easy, <br />
					affordable rides <br />
					and deliveries
				</h1>
				<h3>Download App</h3>
				<a href='.'>
					<img src='./images/app.png' alt='apple store' id='app' />
				</a>
				<a href='.'>
					<img src='./images/play.png' alt='play store' id='play' />
				</a>
			</div>
			<div className='bodyImages'>
				<img
					src='./images/content-blonde-sitting-on-back@2x.png'
					alt='.'
				/>
				<img
					src='./images/delivery-man-wearing-a-face-ma@2x.png'
					alt='.'
				/>
				<img
					src='./images/photo-of-person-driving-138664@2x.png'
					alt='ride'
				/>
			</div>
			<div className='space2'></div>
			<div className='space'>
				<span> Earn extra money driving</span>
				<br />
				<h6>Set your own schedule, be your own boss</h6>
			</div>
			<div className='color'></div>
			<div className='ourOffer'>what we offer</div>
			<div className='delivery-icons'>
				<img
					src='./images/Photos 28_03_2021 3_47_49 pm.png'
					alt=''
				/>
				<img src='./images/images.png' alt='' />
			</div>
		</div>
	);
}
