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
            <Button fluid id={card.id} content="Delete Card" basic color="red"/>
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
              <Table.HeaderCell>Options:</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {(this.props.cards) ? renderCards : null}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default CardsList;