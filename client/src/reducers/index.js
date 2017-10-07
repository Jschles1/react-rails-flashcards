import { combineReducers } from 'redux';
import decksReducer from './decks_reducer';
import cardsReducer from './cards_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({ 
  decks: decksReducer,
  cards: cardsReducer,
  errors: errorsReducer
});

export default rootReducer;