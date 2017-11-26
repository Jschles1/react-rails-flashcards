import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const CompleteQuizModal = (props) => {
  let { modalOpen, finalScore, completeQuiz } = props;
  finalScore = "% " + String(Math.round(finalScore * 100));
  return(
    <Modal
      size="mini"
      open={modalOpen}
      closeOnEscape={false}
      closeOnDimmerClick={false}
      closeOnRootNodeClick={false}
    >
      <Modal.Header>
        Quiz Complete!
      </Modal.Header>
      <Modal.Content>
        <h3>Score:    {finalScore}</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="blue" onClick={completeQuiz} content="Continue" />
      </Modal.Actions>
    </Modal>
  );
}

export default CompleteQuizModal;