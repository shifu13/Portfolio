import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Cases from './components/Cases';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/cases">
              <Cases/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
