import React from 'react';
import { connect } from 'react-redux';
import * as deckActions from '../../actions/deckActions';
import * as cardActions from '../../actions/cardActions';
import { bindActionCreators } from 'redux';
import ChooseDeckForQuiz from '../ChooseDeckForQuiz';
import Quiz from './Quiz';
import CompleteQuizModal from '../CompleteQuizModal';

class QuizPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      choosingDeck: true,
      deckId: 0,
      modalOpen: false,
      finalScore: 0,
      showAnswer: false,
      disabled: true
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

  handleShowAnswer = () => {
    this.setState({
      showAnswer: true,
      disabled: false
    })
  }

  triggerModal = (score) => {
    this.setState({
      modalOpen: true,
      finalScore: score
    })
  }

  completeQuiz = () => {
    this.setState({
      choosingDeck: true,
      modalOpen: false,
      finalScore: 0
    })
    this.props.deckActions.fetchDecks();
  }

  render() {
    const { decks, cards } = this.props;
    const { modalOpen, finalScore, deckId, choosingDeck, disabled, showAnswer } = this.state;
    return(
      <div>
        <CompleteQuizModal 
          modalOpen={modalOpen} 
          finalScore={finalScore} 
          completeQuiz={this.completeQuiz}
        />
        {(choosingDeck) ? 
          <ChooseDeckForQuiz 
            decks={decks} 
            choose={this.handleDeckChoice}
          /> : 
          <Quiz 
            cards={cards} 
            deckId={deckId} 
            disabled={disabled} 
            showAnswer={showAnswer} 
            triggerModal={this.triggerModal}
            showAnswer={this.showAnswer}
          />}
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