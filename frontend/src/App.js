import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Article from './components/Article';
// import './bootstrap.min.css';

function App() {
	return (
		<Router>
			<Header></Header>
			<main>
				<Container>
					{/* <div>Hello</div> */}
					<Route path="/article" component={Article} />
				</Container>
			</main>
			<Footer></Footer>
		</Router>
	);
}

export default App;
