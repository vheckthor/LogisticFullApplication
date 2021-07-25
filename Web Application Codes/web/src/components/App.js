import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import SignUpOld from './SignUp_Old';
import LogIn from './Login';
import Welcome from './Welcome';
import SignUp from './SignUp';

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
				<Route>
					<h1>Nothing is here</h1>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
