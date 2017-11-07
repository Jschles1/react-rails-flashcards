import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const CompleteQuizModal = (props) => {
  const { modalOpen, finalScore, completeQuiz } = props;
  return(
    <Modal
      open={modalOpen}
      closeOnEscape={false}
      closeOnDimmerClick={false}
      closeOnRootNodeClick={false}
    >
      <Modal.Header>
        Quiz Complete!
      </Modal.Header>
      <Modal.Content>
        <p>Score: {finalScore}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="black" labelPosition="right"  content="Continue" />
      </Modal.Actions>
    </Modal>
  );
}

export default CompleteQuizModal;