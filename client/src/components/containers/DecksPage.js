import React from 'react';
import { connect } from 'react-redux';
import DecksForm from './DecksForm';

class DecksPage extends React.Component {
  render() {
    return(
      <div>
        <DecksForm/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { decks: state.decks };
}

export default connect(mapStateToProps, {})(DecksPage);