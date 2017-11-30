import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';
import BasicButton from './BasicButton';

const DecksList = (props) => {
  const { decks, deleteDeck } = props;
  const renderDecks = decks.map(deck => {
    return(
      <Table.Row key={deck.id}>
        <Table.Cell>{deck.name}</Table.Cell>
        <Table.Cell>{deck.subject}</Table.Cell>
        <Table.Cell>
          <BasicButton 
            isFluid={true}
            color="blue"
            link={Link}
            url={`/decks/${deck.id}`}
            textContent="View Cards"
            icon="right arrow"
            label="right"
          />
        </Table.Cell>
        <Table.Cell>
          <BasicButton 
            isFluid={true}
            color="red"
            id={deck.id}
            click={deleteDeck}
            textContent="Delete Deck"
            icon="remove"
            label="right"
          />
        </Table.Cell>
      </Table.Row>
    );
  })

  return(
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
  );
}

export default DecksList;