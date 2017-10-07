import React from 'react';
import { connect } from 'react-redux';
import DecksForm from './DecksForm';
import DecksList from '../DecksList';

class DecksPage extends React.Component {
  render() {
    return(
      <div>
        <DecksList decks={this.props.decks}/>
        <DecksForm/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { decks: state.decks };
}

export default connect(mapStateToProps, {})(DecksPage);