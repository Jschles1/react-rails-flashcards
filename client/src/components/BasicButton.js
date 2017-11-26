import React from 'react';
import { Button } from 'semantic-ui-react';

class BasicButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBeingHovered: false
    }
  }

  render() {
    return(
      <Button 
        basic={!(this.state.isBeingHovered)}
        color={this.props.color}
        onClick={this.props.click}
      >
        {this.props.textContent}
      </Button>
    );
  }
}

export default BasicButton;