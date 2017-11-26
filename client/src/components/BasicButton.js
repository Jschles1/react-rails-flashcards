import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class BasicButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBeingHovered: false
    }
  }

  invertColor = () => {
    this.setState({
      isBeingHovered: !this.state.isBeingHovered
    })
  }

  render() {
    const { isFluid, color, click, textContent, link, url } = this.props;
    return(
      <Button 
        fluid={isFluid}
        basic={!(this.state.isBeingHovered)}
        color={color}
        onClick={click}
        onMouseOver={this.invertColor}
        onMouseLeave={this.invertColor}
        as={link ? link : null}
        to={url ? url : null}
      >
        {textContent}
      </Button>
    );
  }
}

export default BasicButton;