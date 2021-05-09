import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import SignUp from './SignUp';
import Footer from './Footer';
import LogIn from './Login';
import Trial from './Trial';
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
				<Route exact path='/register'>
					<SignUp />
				</Route>
				<Route exact path='/login'>
					<LogIn />
				</Route>
				<Route exact path='/ride'>
					<h1>Rides Components go here</h1>
					<Link to='/'>
						<button>Home</button>
					</Link>
					<Link to='/register'>
						<button>Register</button>
					</Link>
				</Route>
				<Route exact path='/map'>
					<Trial />
				</Route>
				<Route>
					<h1>Nothing is here</h1>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
