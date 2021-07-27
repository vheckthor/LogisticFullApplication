import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import SignUpOld from './SignUp_Old';
import LogIn from './Login';
import Welcome from './Welcome';
import SignUp from './SignUp'; 
import {Error, ErrorPage} from './Error.js'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
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

				<Route path='/sign_up'>
					<SignUp />
				</Route>
				<Route path='/error404'>
					<Error />
				</Route>
				<Route path='/errorPage'>
					<ErrorPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
