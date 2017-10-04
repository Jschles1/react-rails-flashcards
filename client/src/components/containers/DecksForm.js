import React from 'react';
import { connect } from 'react-redux';
import { Segment, Form } from 'semantic-ui-react';

class DecksForm extends React.Component {
  render() {
    return(
      <Segment>
        
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { decks: state.decks };
}

export default connect(mapStateToProps, {})(DecksForm);