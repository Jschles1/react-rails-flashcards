import React from 'react';
import { connect } from 'react-redux';
import { Segment, Form, Input, Button } from 'semantic-ui-react';

class DecksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      subject: ''
    }
  }

  render() {
    return(
      <Segment>
        <Form>
          <Form.Group widths="equal">
            <Form.Input label="Deck Name" placeholder="Deck Name"/>
            <Form.Input label="Subject" placeholder="Subject"/>
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

export default connect(mapStateToProps, {})(DecksForm);