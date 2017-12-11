import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import BasicButton from './BasicButton';

const CardsList = (props) => {
  const { cards, deleteCard } = props;
  const renderCards = cards.map(card => {
    return(
      <Table.Row key={card.id}>
        <Table.Cell>{card.question}</Table.Cell>
        <Table.Cell>{card.answer}</Table.Cell>
        <Table.Cell>
          <BasicButton 
            isFluid={true}
            color="red"
            id={card.id}
            click={deleteCard}
            textContent="Delete Card"
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
          <Table.HeaderCell>Question:</Table.HeaderCell>
          <Table.HeaderCell>Answer:</Table.HeaderCell>
          <Table.HeaderCell style={{textAlign: "center"}}>Options:</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {(cards) ? renderCards : null}
      </Table.Body>
    </Table>
  );
}

export default CardsList;