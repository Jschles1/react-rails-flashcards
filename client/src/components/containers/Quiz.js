import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/cardActions';
import { bindActionCreators } from 'redux';
import { Grid, Segment, Button } from 'semantic-ui-react';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: '',
      showAnswer: false
    }
  }

  render() {
    return(
      <div>
        {/* <div className="card">Hello</div>
        <br></br>
        <Button size="big" content="Show Answer" basic color="black"/> */}
        <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 600 }}>
            <Segment stacked style={{ padding: 50 }}>
              <p>Hello</p>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Quiz;