import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
// import SignUpOld from './SignUp_Old';
import LogIn from './Login';
import Welcome from './Welcome';
import Footer from './Footer'
import SignUp from './SignUp'; 
import Error from './Error.js'
import SignUp2 from './SignUp_Old'
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
				<Route path='/register'>
					<SignUp />
				</Route>
				<Route path='/order'>
					<SignUp2/>
				</Route>
				<Route path='/login'>
					<LogIn />
				</Route>
				<Route path='/ride'>
					<Welcome />
				</Route>

				<Route path='/sign_up'>
					<SignUpOption />
					{/* <SignUp /> */}
				</Route>
				<Route >
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
