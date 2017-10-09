import React from 'react';
import { Table, Button } from 'semantic-ui-react';

class CardsList extends React.PureComponent {
  render() {
    const renderCards = this.props.cards.map(card => {
      return(
        <Table.Row key={card.id}>
          <Table.Cell>{card.question}</Table.Cell>
          <Table.Cell>{card.answer}</Table.Cell>
          <Table.Cell>
            
          </Table.Cell>
          <Table.Cell>
        
          </Table.Cell>
        </Table.Row>
      );
    })

    return(
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Question:</Table.HeaderCell>
              <Table.HeaderCell>Answer:</Table.HeaderCell>
              <Table.HeaderCell colSpan="2">Options:</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {(this.props.cards) ? renderDecks : null}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default CardsList;