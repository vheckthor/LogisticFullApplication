import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import MapsPage from './MapsPage';

function Ride() {
	return (
		<div>
            <Nav />
			<div className='bodDiv'>
				{/* <div className='formDiv'>
                <h1>Select Ride Type</h1>
                <form>
                    <input type='text' placeholder='enter you pick up location' />
                    <input type='text' placeholder='enter you destination' className='destination'/><br/>
                    <input type='submit' value='order now' className='submit'/>
                </form>
            </div> */}
				{/* <div className='maps'> */}
				{/* <h1>Select Ride Type</h1>
                <form>
                    <input type='text' placeholder='enter you pick up location' />
                    <input type='text' placeholder='enter you destination'/>
                </form> */}
				{/* </div> */}
				{/* <MapsPage /> */}
			</div>
            <Footer />
		</div>
	);
}

export default Ride;
