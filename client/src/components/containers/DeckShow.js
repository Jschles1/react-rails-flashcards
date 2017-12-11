import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/cardActions';
import { Header, Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import CardsList from '../CardsList';
import CardsForm from './CardsForm';

class DeckShow extends React.Component {

  componentDidMount() {
    this.props.actions.fetchCards(this.props.deck.id);
  }

  handleDeleteClick = (event) => {
    const id = (event.target.id)
    this.props.actions.deleteCard(this.props.deck.id, id);
  }

  render() {
    return [
      <Grid>
        <Grid.Column floated="left" width={5}>
          <Header as="h2" icon="clone" content={this.props.deck.name} />
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
          <Header as="h2">
            Subject: {this.props.deck.subject}
          </Header>
        </Grid.Column>
      </Grid>,
      <CardsList 
        cards={this.props.cards}
        deleteCard={this.handleDeleteClick}
      />,
       <CardsForm deckId={this.props.deck.id} />
    ];
  }
}

const mapStateToProps = (state, ownProps) => {
  const deck = state.decks.find(deck => deck.id === parseInt(ownProps.match.params.deckId), 10);
  
  if (deck) {
    return { deck: deck, cards: state.cards }
  } else {
    return { deck: {} }
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);