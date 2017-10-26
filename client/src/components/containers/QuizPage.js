import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/deckActions';
import { bindActionCreators } from 'redux';
import ChooseDeckForQuiz from '../ChooseDeckForQuiz';

class QuizPage extends React.Component {

  componentDidMount() {
    this.props.actions.fetchDecks();
  }

  render() {
    return(
      <div>
        <ChooseDeckForQuiz/>
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