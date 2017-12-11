import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/cardActions';
import { bindActionCreators } from 'redux';
import { Segment, Form, Button } from 'semantic-ui-react';
import FormError from '../FormError';
import BasicButton from '../BasicButton';

class CardsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: ''
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    this.props.actions.submitNewCard(this.state, this.props.deckId);
    this.setState({
      question: '',
      answer: ''
    })
  }

  render() {
    return(
      <Segment>
        {this.props.errors === true ? <FormError /> : null}
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group widths="equal">
            <Form.Input value={this.state.question} onChange={this.handleOnChange} name="question" label="Question" placeholder="Question" />
            <Form.Input value={this.state.answer} onChange={this.handleOnChange} name="answer" label="Answer" placeholder="Answer" />
          </Form.Group>
          <BasicButton 
            isFluid={false}
            color="black"
            type="submit"
            textContent="Add Card"
            icon="plus"
            label="right"
          />
        </Form>
      </Segment>
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