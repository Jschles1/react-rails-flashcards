import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/cardActions';
import { bindActionCreators } from 'redux';
import { Segment, Button } from 'semantic-ui-react';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: true,
      answer: false
    }
  }

  render() {
    return(
      <div>
        <div className="card">Hello</div>
      </div>
    );
  }
}

export default Quiz;