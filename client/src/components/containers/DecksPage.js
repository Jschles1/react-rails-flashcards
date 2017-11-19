import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/deckActions';
import { bindActionCreators } from 'redux';
import DecksForm from './DecksForm';
import DecksList from '../DecksList';

class DecksPage extends React.Component {

  componentDidMount() {
    this.props.actions.fetchDecks();
  }

  handleDeleteClick = (event) => {
    const id = event.target.id
    this.props.actions.deleteDeck(id);
  }

  render() {
    return [
      <DecksList decks={this.props.decks} deleteDeck={this.handleDeleteClick} />,
      <DecksForm />
    ];
  }
}

const mapStateToProps = (state) => {
  return { decks: state.decks };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksPage);