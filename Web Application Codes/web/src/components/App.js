import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import SignUpOld from './SignUp_Old';
import LogIn from './Login';
import Welcome from './Welcome';
import Footer from './Footer';
import SignUp from './SignUp';
import Error from './Error.js';
import SignUpOption from './SignUpOption';
// import ErrorPage from './ErrorPage'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
					<Footer />
				</Route>

				<Route exact path='/sign_up'>
					<SignUpOption />
					{/* <SignUp /> */}
				</Route>

				<Route exact path='/sign_up/rider'>
					<SignUp />
				</Route>

				<Route path='/register'>
					<SignUpOld />
				</Route>

				<Route path='/login'>
					<LogIn />
				</Route>

				<Route path='/ride'>
					<Welcome />
				</Route>

				<Route>
					<Error />
				</Route>
				{/* <Route>
					<ErrorPage />
				</Route> */}
			</Switch>
		</Router>
	);
}

export default App;
