import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/deckActions';
import { bindActionCreators } from 'redux';

class QuizPage extends React.Component {

  componentDidMount() {
    this.props.actions.fetchDecks();
  }

  render() {
    return(
      <div></div>
    );
  }
}

export default QuizPage;