import { combineReducers } from 'redux';
import decksReducer from './decks_reducer';
import cardsReducer from './cards_reducer';

const rootReducer = combineReducers({ 
  decks: decksReducer,
  cards: cardsReducer
});

export default rootReducer;