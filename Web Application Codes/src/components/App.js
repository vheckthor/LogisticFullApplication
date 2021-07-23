import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';
import Footer from './Footer';
import LogIn from './Login';
import Ride from './Ride';
import '../css/index.css';
import Drive from './Drive';
import Welcome from './Welcome';

function App() {
	return (
		<Router>
					
			<Switch>
				<Route exact path='/'>
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
					{/* <Ride /> */}
					<Welcome/>
				</Route>
				<Route path='/ride2'>
					<Ride />
				</Route>
				<Route path='/drive'>
					<Drive/>
				</Route>
				<Route path='/map'>{/* <Trial /> */}</Route>
				<Route>
					<h1>Nothing is here</h1>
				</Route>
			</Switch>
					
		</Router>
	);
}

export default App;
