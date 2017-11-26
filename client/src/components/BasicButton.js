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
    const { isFluid, color, click, textContent } = this.props;
    return(
      <Button 
        fluid={isFluid}
        basic={!(this.state.isBeingHovered)}
        color={color}
        onClick={click}
        onMouseOver={this.invertColor}
      >
        {textContent}
      </Button>
    );
  }
}

export default BasicButton;