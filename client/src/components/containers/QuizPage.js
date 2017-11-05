import React from 'react';
import { connect } from 'react-redux';
import * as deckActions from '../../actions/deckActions';
import * as cardActions from '../../actions/cardActions';
import { bindActionCreators } from 'redux';
import ChooseDeckForQuiz from '../ChooseDeckForQuiz';
import Quiz from './Quiz';

class QuizPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choosingDeck: true,
      deckId: 0
    }
  }

  componentDidMount() {
    this.props.deckActions.fetchDecks();
  }

  handleDeckChoice = (event) => {
    const { id } = event.target;
    this.props.cardActions.fetchCards(id, () => {
      this.setState({
        choosingDeck: false,
        deckId: id
      })
    })
  }

  completeQuiz = () => {
    this.setState({
      choosingDeck: true
    })
    this.props.deckActions.fetchDecks();
  }

  render() {
    return(
      <div>
        {(this.state.choosingDeck) ? <ChooseDeckForQuiz decks={this.props.decks} choose={this.handleDeckChoice}/> : <Quiz cards={this.props.cards} deckId={this.state.deckId} completeQuiz={this.completeQuiz}/>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { decks: state.decks, cards: state.cards, errors: state.errors };
}

const mapDispatchToProps = (dispatch) => {
  return { deckActions: bindActionCreators(deckActions, dispatch), cardActions: bindActionCreators(cardActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);