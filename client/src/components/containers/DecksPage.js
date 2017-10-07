import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/deckActions';
import { bindActionCreators } from 'redux';
import DecksForm from './DecksForm';
import DecksList from '../DecksList';

class DecksPage extends React.Component {

  componentWillMount() {
    this.props.actions.fetchDecks();
  }

  render() {
    return(
      <div>
        <DecksList decks={this.props.decks}/>
        <DecksForm/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { decks: state.decks };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksPage);