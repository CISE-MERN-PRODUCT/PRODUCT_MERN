import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Article from './components/Article';
import SomePage from './pages/SomePage';
import HomePage from './pages/HomePage';
import SubmitArticlePage from './pages/SubmitArticlePage';
// import './bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Container>
          {/* <div>Hello</div> */}
          <Route exact path="/" component={HomePage} />

          <Route exact path="/somePage" component={SomePage} />

          <Route exact path="/article" component={Article} />
          <Route exact path="/submit" component={SubmitArticlePage} />
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
