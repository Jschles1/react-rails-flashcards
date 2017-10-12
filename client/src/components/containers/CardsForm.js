import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/deckActions';
import { bindActionCreators } from 'redux';
import { Segment, Form, Input, Button } from 'semantic-ui-react';

class CardsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: ''
    }
  }

  render() {
    return(
      <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cards: state.cards, errors: state.errors };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsForm);