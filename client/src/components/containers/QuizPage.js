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
      disabled: true,
      count: 0,
      correct: 0,
      incorrect: 0
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

  handleRightWrong = (event) => {
    let noNext;
    let incrementCount;
    const { name, id } = event.target;
    const { cards, cardActions } = this.props;
    let { count, correct, deckId, incorrect } = this.state;

    if (cards.length > 1) {
      noNext = false;
      incrementCount = ++count;
    } else {
      noNext = true;
      incrementCount = count;
    }

    if (name === "correct") {
      this.setState({
        [name]: ++correct,
        disabled: true,
        showAnswer: noNext,
        count: incrementCount
      })
    } else {
      this.setState({
        [name]: ++incorrect,
        disabled: true,
        showAnswer: noNext,
        count: incrementCount
      })
    }

    if (cards.length > 1) {
      cardActions.removeAnsweredCard(id);
    } else {
      this.setState({
        showAnswer: false,
      })
      let score = correct / (count + 1);
      cardActions.submitScore(deckId, score, () => {
        this.triggerModal(score);
      });
    }
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
      finalScore: 0,
      count: 0,
      correct: 0,
      incorrect: 0
    })
    this.props.deckActions.fetchDecks();
  }

  render() {
    const { decks, cards } = this.props;
    const { modalOpen, finalScore, deckId, choosingDeck, disabled, showAnswer, count } = this.state;
    return(
      // 3. Upon quiz completion, CompleteQuizModal will be rendered.
      <div>
        <CompleteQuizModal 
          modalOpen={modalOpen} 
          finalScore={finalScore} 
          completeQuiz={this.completeQuiz}
        />
        {choosingDeck ? (
          // 1. Upon mounting QuizPage, user will be asked to choose a card deck to quiz themselves.
          <ChooseDeckForQuiz 
            decks={decks} 
            choose={this.handleDeckChoice}
          /> 
        ) : (
          // 2. After a quiz has been chosen, Quiz will be rendered.
          <Quiz 
            cards={cards} 
            deckId={deckId} 
            disabled={disabled} 
            showAnswer={showAnswer} 
            triggerModal={this.triggerModal}
            handleShowAnswer={this.handleShowAnswer}
            handleRightWrong={this.handleRightWrong}
            count={count}
          />
        )}
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