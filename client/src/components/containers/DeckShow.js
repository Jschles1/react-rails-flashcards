import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/cardActions';
import { bindActionCreators } from 'redux';

class DeckShow extends React.Component {
  render() {
    return(
      <div></div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const deck = state.decks.find(deck => deck.id === parseInt(ownProps.match.params.workoutId), 10);
  
  if (deck) {
    return { deck: deck, cards: state.cards }
  } else {
    return { deck: {} }
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);