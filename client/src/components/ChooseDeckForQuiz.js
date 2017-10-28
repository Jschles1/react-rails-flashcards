import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

const ChooseDeckForQuiz = (props) => {
  const { decks } = props;
  const renderDecks = decks.map(deck => {
    return(
    <Table.Row key={deck.id}>
      <Table.Cell>{deck.name}</Table.Cell>
      <Table.Cell>{deck.subject}</Table.Cell>
      <Table.Cell></Table.Cell>
    </Table.Row>
    );
  })
  return(
    <div>
      <h1>Choose a Deck:</h1>
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

export default ChooseDeckForQuiz;