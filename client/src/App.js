import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import Navbar from './components/Navbar';
import DecksPage from './components/containers/DecksPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar/>
            <Container>
              <Route exact path="/" component={DecksPage}/>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
