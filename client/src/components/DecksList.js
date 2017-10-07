import React from 'react';
import { Table, Button } from 'semantic-ui-react';

const DecksList = (props) => {
  const { decks } = this.props;

  const renderDecks = "";
  
  return(
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Deck Name:</Table.HeaderCell>
            <Table.HeaderCell>Subject:</Table.HeaderCell>
            <Table.HeaderCell>Number Of Sets:</Table.HeaderCell>
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