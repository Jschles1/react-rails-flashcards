import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

const DecksList = (props) => {
  const { decks, deleteDeck } = props;
  const renderDecks = decks.map(deck => {
    return(
      <Table.Row key={deck.id}>
        <Table.Cell>{deck.name}</Table.Cell>
        <Table.Cell>{deck.subject}</Table.Cell>
        <Table.Cell>
          <Button fluid as={Link} to={`/decks/${deck.id}`} content="View Cards" basic color="blue" icon="right arrow" labelPosition="right" />
        </Table.Cell>
        <Table.Cell>
          <Button fluid id={deck.id} onClick={deleteDeck} content="Delete Deck" basic color="red" icon="remove" labelPosition="right" />
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
            <Table.HeaderCell colSpan="2">Options:</Table.HeaderCell>
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