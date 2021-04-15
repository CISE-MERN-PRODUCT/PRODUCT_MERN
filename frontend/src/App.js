import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
// import './bootstrap.min.css';

function App() {
	return (
		<Router>
			<Header></Header>
			<div>Hello</div>
		</Router>
	);
}

export default App;
