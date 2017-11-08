import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/cardActions';
import { bindActionCreators } from 'redux';
import { Grid, Segment, Button, Header } from 'semantic-ui-react';
import CompleteQuizModal from '../CompleteQuizModal';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false,
      disabled: true,
      count: 0,
      correct: 0,
      incorrect: 0
    }
  }

  handleShowAnswer = () => {
    this.setState({
      showAnswer: true,
      disabled: false
    })
  }

  handleRightWrong = (event) => {
    let noNext;
    let incrementCount;
    const { name, id } = event.target;
    const { cards, actions, deckId, triggerModal } = this.props;
    let { count, correct, incorrect } = this.state;

    if (cards.length > 1) {
      noNext = false;
      incrementCount = ++count;
    } else {
      noNext = true;
      incrementCount = count;
    }

    if (name === "correct") {
      this.setState({
        [name]: ++correct,
        disabled: true,
        showAnswer: noNext,
        count: incrementCount
      })
    } else {
      this.setState({
        [name]: ++incorrect,
        disabled: true,
        showAnswer: noNext,
        count: incrementCount
      })
    }

    if (cards.length > 1) {
      actions.removeAnsweredCard(id);
    } else {
      const score = correct / (count + 1);
      actions.submitScore(deckId, score, () => {
        triggerModal(score);
      });
    }
  }

  render() {
    // const card = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
    const card = this.props.cards[0]
    const { showAnswer, disabled, count } = this.state;
    return(
      <div>
        <Header style={{ marginBottom: 15 }}>Question {count + 1}</Header>
        <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 500 }}>
            <Segment stacked style={{ padding: 50 }}>
              {(showAnswer) ? card.answer : card.question}
            </Segment>
            <Button 
              style={{ marginBottom: 20, marginTop: 20 }} 
              onClick={this.handleShowAnswer} 
              disabled={(showAnswer) ? true : false}
              size="big" 
              circular 
              content="Show Answer"
            />
            <br></br>
            <Button id={card.id} name="correct" style={{ margin: 10 }} onClick={this.handleRightWrong} size="massive" disabled={disabled} color="green" circular content="Correct"/>
            <Button id={card.id} name="incorrect" style={{ margin: 10 }} onClick={this.handleRightWrong} size="massive" disabled={disabled} color="red" circular content="Incorrect"/>
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