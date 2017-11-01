import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/cardActions';
import { bindActionCreators } from 'redux';
import { Grid, Segment, Button, Header } from 'semantic-ui-react';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false,
      disabled: true
    }
  }

  handleShowAnswer = () => {
    this.setState({
      showAnswer: true,
      disabled: false
    })
  }

  render() {
    let card = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
    return(
      <div>
        <Header style={{ marginBottom: 15 }}>Question 1</Header>
        <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 500 }}>
            <Segment stacked style={{ padding: 50 }}>
              {(this.state.showAnswer) ? card.answer : card.question}
            </Segment>
            <Button 
              style={{ marginBottom: 20, marginTop: 20 }} 
              onClick={this.handleShowAnswer} 
              disabled={(this.state.showAnswer) ? true : false}
              size="big" 
              circular 
              content="Show Answer"
            />
            <br></br>
            <Button style={{ margin: 10 }} size="massive" disabled={this.state.disabled} color="red" circular icon="remove"/>
            <Button style={{ margin: 10 }} size="massive" disabled={this.state.disabled} color="green" circular icon="check"/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { decks: state.decks, cards: state.cards, errors: state.errors };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);