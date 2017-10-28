import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/deckActions';
import * as actions from '../../actions/cardActions';
import { bindActionCreators } from 'redux';
import ChooseDeckForQuiz from '../ChooseDeckForQuiz';
import Quiz from './Quiz';

class QuizPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choosingDeck: true
    }
  }

  componentDidMount() {
    this.props.actions.fetchDecks();
  }

  handleDeckChoice = (event) => {
    this.setState({
      choosingDeck: false
    })
  }

  render() {
    return(
      <div>
        {(this.state.choosingDeck) ? <ChooseDeckForQuiz decks={this.props.decks} choose={this.handleDeckChoice}/> : <Quiz/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { decks: state.decks, cards: state.cards, errors: state.errors };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);