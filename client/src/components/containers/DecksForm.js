import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/deckActions';
import { bindActionCreators } from 'redux';
import { Segment, Form, Input, Button } from 'semantic-ui-react';

class DecksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      subject: ''
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    this.props.actions.submitNewDeck(this.state);
  }

  render() {
    return(
      <Segment>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group widths="equal">
            <Form.Input value={this.state.name} onChange={this.handleOnChange} name="name" label="Deck Name" placeholder="Deck Name"/>
            <Form.Input value={this.state.subject} onChange={this.handleOnChange} name="subject" label="Subject" placeholder="Subject"/>
          </Form.Group>
          <Button basic color="black" content="Create Deck" type="submit" icon="plus" labelPosition="right"/>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { decks: state.decks };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksForm);