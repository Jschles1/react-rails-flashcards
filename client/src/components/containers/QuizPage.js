import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/deckActions';
import { bindActionCreators } from 'redux';
import ChooseDeckForQuiz from '../ChooseDeckForQuiz';

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

  render() {
    return(
      <div>
        <ChooseDeckForQuiz decks={this.props.decks}/>
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