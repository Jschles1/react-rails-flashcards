import React from 'react';
import { Button } from 'semantic-ui-react';

class BasicButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBeingHovered: false
    }
  }

  invertColor = () => {
    this.setState({
      isBeingHovered: true
    })
  }

  render() {
    return(
      <Button 
        fluid={this.props.isFluid}
        basic={!(this.state.isBeingHovered)}
        color={this.props.color}
        onClick={this.props.click}
        onMouseOver={this.invertColor}
      >
        {this.props.textContent}
      </Button>
    );
  }
}

export default BasicButton;