import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/cardActions';
import { bindActionCreators } from 'redux';
import { Grid, Segment, Button } from 'semantic-ui-react';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false
    }
  }

  componentDidMount() {
    this.props.actions.fetchCards(this.props.deckId);
  }

  render() {
    let card = this.props.cards[Math.floor(Math.random() * this.props.cards.length)]
    return(
      <div>
        <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 600 }}>
            <Segment stacked style={{ padding: 50 }}>
              {(this.state.showAnswer) ? card.answer : card.question}
            </Segment>
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