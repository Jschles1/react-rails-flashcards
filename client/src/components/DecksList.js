import React from 'react';
import { Table, Button } from 'semantic-ui-react';

const DecksList = (props) => {
  const { decks } = this.props;

  const renderDecks = decks.map(deck => {
    return(
      <Table.Row key={deck.id}>
        <Table.Cell>{deck.name}</Table.Cell>
        <Table.Cell>{deck.subject}</Table.Cell>
        <Table.Cell>
          <Button fluid content="View Cards" basic color="blue" icon="right arrow" labelPosition="right"/>
        </Table.Cell>
      </Table.Row>
    );
  })

  return(
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Deck Name:</Table.HeaderCell>
            <Table.HeaderCell>Subject:</Table.HeaderCell>
            <Table.HeaderCell>Options:</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {(decks) ? renderDecks : null}
        </Table.Body>
      </Table>
    </div>
  );
}

export default DecksList;