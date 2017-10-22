import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import Navbar from './components/Navbar';
import DecksPage from './components/containers/DecksPage';
import DeckShow from './components/containers/DeckShow';
import QuizPage from './components/containers/QuizShow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar/>
            <br></br>
            <Container>
            <Route exact path="/" component={DecksPage}/>
              <Switch>
                <Route path="/decks/:deckId" component={DeckShow}/>
              </Switch>
            <Route exact path="/quiz" component={QuizPage}/>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
