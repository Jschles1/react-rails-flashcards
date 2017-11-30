import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/deckActions';
import { bindActionCreators } from 'redux';
import { Segment, Form, Button } from 'semantic-ui-react';
import FormError from '../FormError';
import BasicButton from '../BasicButton';

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
        {this.props.errors === true ? <FormError /> : null}
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group widths="equal">
            <Form.Input value={this.state.name} onChange={this.handleOnChange} name="name" label="Deck Name" placeholder="Deck Name" />
            <Form.Input value={this.state.subject} onChange={this.handleOnChange} name="subject" label="Subject" placeholder="Subject" />
          </Form.Group>
          <BasicButton 
            isFluid={false}
            color="black"
            type="submit"
            textContent="Create Deck"
            icon="plus"
            label="right"
          />
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state) => {
  return { decks: state.decks, errors: state.errors };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksForm);