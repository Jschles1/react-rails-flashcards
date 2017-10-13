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

  handleOnChange = (event) => {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    this.props.actions.submitNewCard(this.state);
  }

  render() {
    return(
      <Segment>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group widths="equal">
            <Form.Input value={this.state.question} onChange={this.handleOnChange} name="name" label="Question" placeholder="Question"/>
            <Form.Input value={this.state.answer} onChange={this.handleOnChange} name="subject" label="Answer" placeholder="Answer"/>
          </Form.Group>
          <Button basic color="black" content="Add Question" type="submit" icon="plus" labelPosition="right"/>
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