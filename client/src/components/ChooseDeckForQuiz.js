import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import BasicButton from './BasicButton';

const ChooseDeckForQuiz = (props) => {
  const { decks, choose } = props;
  const renderDecks = decks.map(deck => {
    return(
    <Table.Row key={deck.id}>
      <Table.Cell>{deck.name}</Table.Cell>
      <Table.Cell>{deck.subject}</Table.Cell>
      <Table.Cell>
        <BasicButton 
            isFluid={true}
            color="green"
            id={deck.id}
            click={choose}
            textContent="Start Quiz"
            icon="right arrow"
            label="right"
          />
      </Table.Cell>
    </Table.Row>
    );
  })
  return [
    <h1 style={{marginBottom: "15px"}}>Choose a Deck:</h1>,
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Deck Name:</Table.HeaderCell>
          <Table.HeaderCell>Subject:</Table.HeaderCell>
          <Table.HeaderCell style={{textAlign: "center"}}>Options:</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {(decks) ? renderDecks : null}
      </Table.Body>
    </Table>
  ];
}

export default ChooseDeckForQuiz;