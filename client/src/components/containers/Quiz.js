import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/cardActions';
import { bindActionCreators } from 'redux';
import { Grid, Segment, Button, Header } from 'semantic-ui-react';
import CompleteQuizModal from '../CompleteQuizModal';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    const { handleShowAnswer, handleRightWrong, showAnswer, disabled, cards, count } = this.props;
    const card = this.props.cards[0]
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
              onClick={handleShowAnswer} 
              disabled={(showAnswer) ? true : false}
              size="big" 
              circular 
              content="Show Answer"
            />
            <br></br>
            <Button id={card.id} name="correct" style={{ margin: 10 }} onClick={handleRightWrong} size="massive" disabled={disabled} color="green" circular content="Correct" />
            <Button id={card.id} name="incorrect" style={{ margin: 10 }} onClick={handleRightWrong} size="massive" disabled={disabled} color="red" circular content="Incorrect" />
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