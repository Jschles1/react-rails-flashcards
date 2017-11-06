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
      count: 1,
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
    console.log(event.target.name)
    const { name, id } = event.target;
    if (name === "correct") {
      this.setState({
        [name]: ++this.state.correct,
        disabled: true,
        showAnswer: false,
        count: ++this.state.count
      })
    } else {
      this.setState({
        [name]: ++this.state.incorrect,
        disabled: true,
        showAnswer: false,
        count: ++this.state.count
      })
    }
    if (this.props.cards.length > 1) {
      this.props.actions.removeAnsweredCard(id);
    } else {
      const score = this.state.correct / this.state.count;
      this.props.actions.completeQuiz(this.props.deckId, score, () => {
        this.props.completeQuiz();
      });
    }
  }

  render() {
    // const card = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
    const card = this.props.cards[0]
    return(
      <div>
        <Header style={{ marginBottom: 15 }}>Question {this.state.count}</Header>
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
            <Button id={card.id} name="correct" style={{ margin: 10 }} onClick={this.handleRightWrong} size="massive" disabled={this.state.disabled} color="green" circular content="Correct"/>
            <Button id={card.id} name="incorrect" style={{ margin: 10 }} onClick={this.handleRightWrong} size="massive" disabled={this.state.disabled} color="red" circular content="Incorrect"/>
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