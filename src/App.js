import './styles/App.css';
import Cards from './components/Cards';
import CodeInput from './components/CodeInput';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App h-screen">
			<Router>
				<Switch>
					<Route exact path="/">
						<div className="flex flex-col h-full w-full items-center justify-around">
							<h1 className="m-1 font-bold text-2xl">Join a room by adding its /[Room Name] to the URL!</h1>
							{/* <CodeInput /> */}
						</div>
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
