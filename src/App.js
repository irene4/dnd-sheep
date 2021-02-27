import './styles/App.css';
import Cards from './components/Cards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App h-screen">
			<Router>
				<Switch>
					<Route exact path="/">
						<h1 className="m-1 text-xl">Join a room by adding its /[Room Name] to the URL!</h1>
					</Route>
					<Route path="/:slug">
						<Cards />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
