import React from 'react';
import { connect } from 'react-redux';

class DecksPage extends React.Component {
  render() {
    return(
      <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return { decks: state.decks };
}

export default connect(mapStateToProps, {})(DecksPage);