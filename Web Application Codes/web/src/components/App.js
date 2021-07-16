import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import SignUp from './SignUp';
import Footer from './Footer';
import LogIn from './Login';
import Ride from './Ride';
import GetMoving from './GetMoving';
import Verification from './Verification';
// import Trial from './Trial';
import '../css/index.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Nav />
					<Home />
					<Footer />
				</Route>
				<Route path='/register'>
					<SignUp />
				</Route>
				<Route path='/login'>
					<LogIn />
				</Route>
				<Route path='/ride'>
					<Nav />
					<Ride />
					<Footer />
				</Route>
				<Route path='/map'>{/* <Trial /> */}</Route>
				<Route path='/try'>
					<div className='blur'>
						<div className='signup-page'>
							<Nav />
							<GetMoving />
						</div>
					</div>
					{/* <Verification /> */}
				</Route>
				<Route>
					<h1>Nothing is here</h1>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
